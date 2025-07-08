"use client";
// ❇️ Фокусиране на плавен скрол към секция
export default function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // Account for sticky header
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}