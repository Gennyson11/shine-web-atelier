import React from "react";
import PackageCard from "./PackageCard";

const packages = [
  { credits: 50, price: 4, pricePerCredit: 0.08 },
  { credits: 100, price: 8, pricePerCredit: 0.08 },
  { credits: 250, price: 20, pricePerCredit: 0.08 },
  { credits: 500, price: 40, pricePerCredit: 0.08 },
  { credits: 1000, price: 80, pricePerCredit: 0.08 },
  { credits: 2000, price: 120, pricePerCredit: 0.06 },
];

const PackagesSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha seu pacote
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Todos os pacotes incluem créditos oficiais Lovable com entrega automática.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.credits} {...pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
