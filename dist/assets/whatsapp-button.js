document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".whatsapp-float")) return;

  const message = "Hola María Paula, quisiera hablar contigo sobre tus obras.";
  const button = document.createElement("a");
  button.className = "whatsapp-float";
  button.href = `https://wa.me/573187826651?text=${encodeURIComponent(message)}`;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.setAttribute("aria-label", "Contactar a María Paula por WhatsApp");
  button.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M19.1 17.7c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1c-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.7.1-.2.1-.4 0-.6-.1-.1-.7-1.6-1-2.2-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.6 5 2.1.9 3 .9 4.1.8.7-.1 1.8-.7 2-1.4s.3-1.3.2-1.4c-.1-.2-.3-.3-.6-.4zM16 3.3a12.6 12.6 0 0 0-10.8 19l-1.6 5.9 6-1.6A12.7 12.7 0 1 0 16 3.3zm0 22.9c-2 0-3.9-.5-5.5-1.5l-.4-.2-3.5.9.9-3.4-.2-.4A10.5 10.5 0 1 1 16 26.2z"/></svg><span>Escríbenos por WhatsApp</span>';
  document.body.append(button);
});
