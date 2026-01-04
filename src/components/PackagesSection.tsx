import React from "react";
import { MessageCircle } from "lucide-react";
import PackageCard from "./PackageCard";

const packages = [
  { credits: 50, price: 4, pricePerCredit: 0.08 },
  { credits: 100, price: 8, pricePerCredit: 0.08 },
  { credits: 250, price: 20, pricePerCredit: 0.08 },
  { credits: 500, price: 40, pricePerCredit: 0.08 },
  { credits: 1000, price: 80, pricePerCredit: 0.08 },
  { credits: 2000, price: 120, pricePerCredit: 0.06 },
];

interface PackagesSectionProps {
  onBuy: (credits: number, price: number) => void;
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ onBuy }) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Outros <span className="text-primary">Pacotes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard 
              key={pkg.credits} 
              {...pkg} 
              index={index} 
              onBuy={() => onBuy(pkg.credits, pkg.price)}
            />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="flex justify-center mt-8">
          <a 
            href="https://wa.me/558499889568?text=Olá! Acabei de efetuar uma compra de créditos Lovable."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 text-sm hover:bg-emerald-500/20 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Após a compra, envie o comprovante no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
