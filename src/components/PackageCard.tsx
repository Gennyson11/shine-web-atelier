import React from "react";
import { Button } from "@/components/ui/button";
import HeartIcon from "./HeartIcon";

interface PackageCardProps {
  credits: number;
  price: number;
  pricePerCredit: number;
  index: number;
  onBuy: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({
  credits,
  price,
  pricePerCredit,
  index,
  onBuy,
}) => {
  return (
    <div 
      className="group bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 p-5 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col items-center">
        {/* Heart Icon */}
        <div className="mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
          <HeartIcon size={32} />
        </div>

        {/* Credits */}
        <div className="text-2xl font-bold text-foreground mb-1">
          {credits}
        </div>
        <div className="text-xs text-muted-foreground mb-3">créditos</div>

        {/* Price */}
        <div className="text-xl font-bold text-foreground mb-1">
          R$ {price}
        </div>
        <div className="text-xs text-muted-foreground mb-4">
          R$ {pricePerCredit.toFixed(2)}/crédito
        </div>

        {/* CTA Button */}
        <Button 
          variant="outline" 
          className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          onClick={onBuy}
        >
          Selecionar
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
