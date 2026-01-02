import React from "react";
import { Sparkles, Clock } from "lucide-react";

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-primary-foreground py-3 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1 -left-1 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container flex items-center justify-center gap-3 relative z-10">
        <Sparkles className="w-5 h-5 animate-pulse" />
        <p className="text-sm md:text-base font-semibold text-center">
          🎉 PROMOÇÃO ESPECIAL: <span className="text-yellow-300">50% DE DESCONTO</span> em todos os pacotes!
        </p>
        <div className="hidden sm:flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full">
          <Clock className="w-4 h-4" />
          <span className="text-xs font-medium">Até 06/01/2026</span>
        </div>
        <Sparkles className="w-5 h-5 animate-pulse hidden md:block" />
      </div>
    </div>
  );
};

export default PromoBanner;
