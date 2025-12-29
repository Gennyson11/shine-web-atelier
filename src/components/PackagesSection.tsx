import React from "react";
import { MessageCircle } from "lucide-react";
import PackageCard from "./PackageCard";

const packages = [
  { credits: 50, price: 8, pricePerCredit: 0.16 },
  { credits: 100, price: 16, pricePerCredit: 0.16 },
  { credits: 250, price: 40, pricePerCredit: 0.16 },
  { credits: 500, price: 80, pricePerCredit: 0.16 },
  { credits: 1000, price: 160, pricePerCredit: 0.16 },
  { credits: 2000, price: 240, pricePerCredit: 0.12 },
];

interface PackagesSectionProps {
  onBuy: (credits: number, price: number) => void;
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ onBuy }) => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha seu <span className="text-gradient-primary">pacote</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Todos os pacotes incluem créditos oficiais Lovable com entrega automática via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
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
        <div className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 text-sm md:text-base">
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            <span>Após efetuar a compra, nos chame no WhatsApp com o comprovante e o valor de créditos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
