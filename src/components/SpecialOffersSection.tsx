import React from "react";
import { MessageCircle } from "lucide-react";
import OfferBadge from "./OfferBadge";
import OfferCard from "./OfferCard";

const specialOffers = [
  {
    credits: 200,
    baseCredits: 150,
    bonusCredits: 50,
    originalPrice: 80,
    discountedPrice: 24,
    discountPercentage: 70,
    pricePerCredit: 0.12,
  },
  {
    credits: 400,
    baseCredits: 320,
    bonusCredits: 80,
    originalPrice: 180,
    discountedPrice: 54,
    discountPercentage: 70,
    pricePerCredit: 0.14,
  },
  {
    credits: 700,
    baseCredits: 550,
    bonusCredits: 150,
    originalPrice: 200,
    discountedPrice: 110,
    discountPercentage: 45,
    pricePerCredit: 0.16,
  },
  {
    credits: 1500,
    baseCredits: 1000,
    bonusCredits: 500,
    originalPrice: 580,
    discountedPrice: 180,
    discountPercentage: 55,
    pricePerCredit: 0.12,
  },
];

interface SpecialOffersSectionProps {
  onBuy: (credits: number, price: number) => void;
}

const SpecialOffersSection: React.FC<SpecialOffersSectionProps> = ({ onBuy }) => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container px-4">
        <div className="flex flex-col items-center mb-12">
          <OfferBadge>Ofertas por Tempo Limitado</OfferBadge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-center">
            Ofertas <span className="text-gradient-primary">Especiais</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-center max-w-lg">
            Aproveite nossos pacotes com desconto exclusivo por tempo limitado
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {specialOffers.map((offer, index) => (
            <OfferCard 
              key={offer.credits} 
              {...offer} 
              index={index} 
              onBuy={() => onBuy(offer.credits, offer.discountedPrice)}
            />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="flex justify-center mt-10">
          <a 
            href="https://wa.me/558499889568?text=Olá! Acabei de efetuar uma compra de créditos Lovable."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 text-sm md:text-base hover:bg-emerald-500/20 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            <span>Após efetuar a compra, nos chame no WhatsApp com o comprovante e o valor de créditos</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
