import React from "react";
import { Button } from "@/components/ui/button";
import HeartIcon from "./HeartIcon";
import { Zap } from "lucide-react";

interface OfferCardProps {
  credits: number;
  baseCredits: number;
  bonusCredits: number;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  pricePerCredit: number;
  index: number;
  onBuy: () => void;
}

const OfferCard: React.FC<OfferCardProps> = ({
  credits,
  baseCredits,
  bonusCredits,
  originalPrice,
  discountedPrice,
  discountPercentage,
  pricePerCredit,
  index,
  onBuy,
}) => {
  return (
    <div 
      className="relative group rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm p-6 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Offer Badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-1 gradient-button text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-button">
          <Zap className="w-3 h-3" />
          Oferta
        </span>
      </div>

      <div className="relative flex flex-col items-center pt-4">
        {/* Heart Icon */}
        <div className="mb-4 animate-float">
          <HeartIcon size={40} />
        </div>

        {/* Credits */}
        <div className="text-4xl font-bold text-foreground mb-1">
          {credits}
        </div>
        <div className="text-sm text-muted-foreground mb-1">créditos</div>
        <div className="text-xs text-primary font-medium mb-4">
          ({baseCredits} + {bonusCredits} bônus)
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm text-muted-foreground line-through">
            R$ {originalPrice}
          </span>
          <span className="bg-success text-primary-foreground text-xs font-bold px-2 py-0.5 rounded">
            -{discountPercentage}%
          </span>
        </div>
        
        <div className="text-3xl font-bold text-foreground mb-1">
          R$ {discountedPrice}
        </div>
        <div className="text-xs text-muted-foreground mb-6">
          R$ {pricePerCredit.toFixed(2)}/crédito
        </div>

        {/* CTA Button */}
        <Button 
          className="w-full gradient-button text-primary-foreground font-semibold shadow-button hover:shadow-button-hover hover:scale-105 transition-all duration-300" 
          size="lg" 
          onClick={onBuy}
        >
          Garantir Agora
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
