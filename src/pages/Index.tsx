import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import PackagesSection from "@/components/PackagesSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SpecialOffersSection />
        <PackagesSection />
      </main>
    </div>
  );
};

export default Index;
