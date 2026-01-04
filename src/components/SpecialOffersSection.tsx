import React from "react";
import { MessageCircle } from "lucide-react";
import OfferBadge from "./OfferBadge";
import OfferCard from "./OfferCard";

const specialOffers = [
  {
    credits: 200,
    baseCredits: 150,
    bonusCredits: 50,
    originalPrice: 40,
    discountedPrice: 12,
    discountPercentage: 70,
    pricePerCredit: 0.06,
  },
  {
    credits: 400,
    baseCredits: 320,
    bonusCredits: 80,
    originalPrice: 90,
    discountedPrice: 27,
    discountPercentage: 70,
    pricePerCredit: 0.07,
  },
  {
    credits: 700,
    baseCredits: 550,
    bonusCredits: 150,
    originalPrice: 100,
    discountedPrice: 55,
    discountPercentage: 45,
    pricePerCredit: 0.08,
  },
  {
    credits: 1500,
    baseCredits: 1000,
    bonusCredits: 500,
    originalPrice: 290,
    discountedPrice: 90,
    discountPercentage: 55,
    pricePerCredit: 0.06,
  },
];

interface SpecialOffersSectionProps {
  onBuy: (credits: number, price: number) => void;
}

const SpecialOffersSection: React.FC<SpecialOffersSectionProps> = ({ onBuy }) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Ofertas <span className="text-primary">Especiais</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Pacotes com desconto exclusivo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {specialOffers.map((offer, index) => (
            <OfferCard 
              key={offer.credits} 
              {...offer} 
              index={index} 
              onBuy={() => onBuy(offer.credits, offer.discountedPrice)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
