import React from "react";
import { Sparkles } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 text-center aurora-bg stars-bg overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Melhores preços do mercado</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
          Compre créditos{" "}
          <span className="text-gradient-primary">Lovable</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
          Adquira créditos para usar na plataforma Lovable com os melhores preços. 
          <span className="text-foreground font-medium"> Pagamento via PIX com liberação instantânea.</span>
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
          {[
            { label: 'Entrega Imediata', icon: '⚡' },
            { label: 'Suporte 24/7', icon: '💬' },
            { label: 'Pagamento Seguro', icon: '🔒' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <span>{stat.icon}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
