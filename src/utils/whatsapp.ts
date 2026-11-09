/**
 * Centralized WhatsApp link builder
 * Official number: (11) 91955-7898 -> 5511919557898
 */
export const OFFICIAL_WHATSAPP_NUMBER = '5511919557898';
export const OFFICIAL_DISPLAY_PHONE = '(11) 91955-7898';
export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá, Kayky! Vim pelo seu site e gostaria de saber mais sobre consórcios.';

export function buildWhatsAppLink(
  phone: string = OFFICIAL_WHATSAPP_NUMBER,
  message: string = DEFAULT_WHATSAPP_MESSAGE
): string {
  // Normalize phone number (strip non-digits, ensure 55 country code)
  let cleanPhone = (phone || OFFICIAL_WHATSAPP_NUMBER).replace(/\D/g, '');
  if (cleanPhone.length === 11 && !cleanPhone.startsWith('55')) {
    cleanPhone = '55' + cleanPhone;
  }
  if (!cleanPhone || cleanPhone.length < 10) {
    cleanPhone = OFFICIAL_WHATSAPP_NUMBER;
  }

  const encodedText = encodeURIComponent((message || DEFAULT_WHATSAPP_MESSAGE).trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value);
}
