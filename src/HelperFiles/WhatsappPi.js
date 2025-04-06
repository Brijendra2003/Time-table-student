// utils/whatsapp.js
export function sendWhatsAppMessage(phone, message) {
  const encodedMsg = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encodedMsg}`;
  window.open(url, "_blank");
}

sendWhatsAppMessage("8623876761", "Hellow from Whatsapp ");
