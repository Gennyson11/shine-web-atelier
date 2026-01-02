import React from "react";
import { Sparkles, Clock } from "lucide-react";

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-3 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1 -left-1 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container flex items-center justify-center gap-3 relative z-10">
        <Sparkles className="w-5 h-5 animate-pulse" />
        <p className="text-sm md:text-base font-semibold text-center">
          🎉 PROMOÇÃO ESPECIAL: <span className="text-yellow-300">50% DE DESCONTO</span> em todos os pacotes!
        </p>
        <Sparkles className="w-5 h-5 animate-pulse hidden md:block" />
      </div>
    </div>
  );
};

export default PromoBanner;
