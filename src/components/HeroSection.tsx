import React from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 text-center">
      <div className="container max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Compre créditos{" "}
          <span className="text-primary">Lovable</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Adquira créditos para usar na plataforma Lovable com os melhores preços
        </p>
        <Button variant="hero" size="lg" className="animate-fade-in">
          <LogIn className="mr-2 h-5 w-5" />
          Entrar para comprar
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
