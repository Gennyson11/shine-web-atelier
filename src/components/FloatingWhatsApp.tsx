import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/558499889568?text=Olá! Gostaria de saber mais sobre os créditos Lovable."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsApp;
