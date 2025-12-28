import React from "react";
import OfferBadge from "./OfferBadge";
import OfferCard from "./OfferCard";

const specialOffers = [
  {
    credits: 200,
    baseCredits: 150,
    bonusCredits: 50,
    originalPrice: 40,
    discountedPrice: 33,
    discountPercentage: 18,
    pricePerCredit: 0.17,
  },
  {
    credits: 400,
    baseCredits: 320,
    bonusCredits: 80,
    originalPrice: 90,
    discountedPrice: 85,
    discountPercentage: 6,
    pricePerCredit: 0.21,
  },
  {
    credits: 700,
    baseCredits: 550,
    bonusCredits: 150,
    originalPrice: 100,
    discountedPrice: 60,
    discountPercentage: 40,
    pricePerCredit: 0.09,
  },
  {
    credits: 1500,
    baseCredits: 1000,
    bonusCredits: 500,
    originalPrice: 200,
    discountedPrice: 140,
    discountPercentage: 30,
    pricePerCredit: 0.09,
  },
];

const SpecialOffersSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4">
        <div className="flex flex-col items-center mb-10">
          <OfferBadge>Ofertas por Tempo Limitado</OfferBadge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Ofertas Especiais
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {specialOffers.map((offer, index) => (
            <OfferCard key={offer.credits} {...offer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
