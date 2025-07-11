import { NextResponse } from 'next/server';
import axios from 'axios';

function toE164(phone: string): string {
    // Ако започва с 0, замени с +359
    if (phone.startsWith('0')) {
        return '+359' + phone.slice(1);
    }
    // Ако вече започва с +, върни го така
    if (phone.startsWith('+')) {
        return phone;
    }
    // Ако е без + и не започва с 0, добави +359
    return '+359' + phone;
}

export async function POST(request: Request) {
    // Email вече не е задължително поле
    const { name, phone, city, message, email } = await request.json();

    // Валидация на задължителните полета (вече и email)
    if (!name || !phone || !city || !email) {
        return NextResponse.json({ error: 'Моля, попълнете всички задължителни полета.' }, { status: 400 });
    }

    const formattedPhone = toE164(phone);

    // Template ID директно в кода
    const ADMIN_TEMPLATE_ID = 6;   // <-- номер на шаблон за админ

    try {
        // 1. Добави/обнови контакт в Brevo (по желание)
        // Премахвам SMS от attributes
        const contactPayload: {
            updateEnabled: boolean;
            attributes: {
                FIRSTNAME: string;
                PHONE: string;
                CITY: string;
                MESSAGE: string;
            };
            listIds: number[];
            email: string;
        } = {
            updateEnabled: true,
            attributes: {
                'FIRSTNAME': name,
                'PHONE': formattedPhone,
                'CITY': city,
                'MESSAGE': message || "",
            },
            listIds: [2],
            email: email,
        };
        await axios.post('https://api.brevo.com/v3/contacts', contactPayload, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY!,
            }
        });

        // 2. Имейл до собственика (админа)
        const adminEmailPayload = {
            sender: {
                name: process.env.BREVO_SENDER_NAME,
                email: process.env.BREVO_SENDER_EMAIL,
            },
            to: [{ email: process.env.BREVO_ADMIN_EMAIL!, name: "Admin" }],
            templateId: ADMIN_TEMPLATE_ID,
            params: {
                NAME: name,
                PHONE: formattedPhone,
                CITY: city,
                MESSAGE: message || "",
                EMAIL: email || "",
            }
        };

        // Изпращане само на имейл до админа
        const adminRes = await axios.post(
            'https://api.brevo.com/v3/smtp/email',
            adminEmailPayload,
            {
                headers: {
                    'api-key': process.env.BREVO_API_KEY!,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }
        );

        if (adminRes.status !== 201) {
            return NextResponse.json({ error: 'Неуспешно изпращане на имейл.' }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Успешно изпратено!' });

    } catch (error: any) {
        // Гарантираме, че винаги връщаме валиден JSON
        if (error.response && error.response.data) {
            let msg = error.response.data.message || error.response.data.error || 'Възникна грешка при записване.';
            return NextResponse.json(
                { error: msg },
                { status: error.response.status }
            );
        }
        return NextResponse.json({ error: error.message || 'Сървърна грешка' }, { status: 500 });
    }
}