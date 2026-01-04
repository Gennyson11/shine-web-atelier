import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 text-center">
      <div className="container max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Compre créditos{" "}
          <span className="text-primary">Lovable</span>
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
          Pagamento via PIX com liberação instantânea
        </p>

        {/* Quick info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span>⚡ Entrega Imediata</span>
          <span>💬 Suporte 24/7</span>
          <span>🔒 Pagamento Seguro</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
