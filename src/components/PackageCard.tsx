import React from "react";
import { Button } from "@/components/ui/button";
import HeartIcon from "./HeartIcon";

interface PackageCardProps {
  credits: number;
  price: number;
  pricePerCredit: number;
  index: number;
}

const PackageCard: React.FC<PackageCardProps> = ({
  credits,
  price,
  pricePerCredit,
  index,
}) => {
  return (
    <div 
      className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col items-center">
        {/* Heart Icon */}
        <div className="mb-3">
          <HeartIcon size={36} />
        </div>

        {/* Credits */}
        <div className="text-3xl font-extrabold text-foreground mb-1">
          {credits}
        </div>
        <div className="text-sm text-muted-foreground mb-4">créditos</div>

        {/* Price */}
        <div className="text-2xl font-bold text-foreground mb-1">
          R$ {price}
        </div>
        <div className="text-xs text-muted-foreground mb-5">
          R$ {pricePerCredit.toFixed(2)}/crédito
        </div>

        {/* CTA Button */}
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Selecionar
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
