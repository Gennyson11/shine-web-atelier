import React, { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import PackagesSection from "@/components/PackagesSection";
import PixPaymentModal from "@/components/PixPaymentModal";

const Index: React.FC = () => {
  const [pixModalOpen, setPixModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ credits: number; price: number } | null>(null);

  const handleBuyCredits = (credits: number, price: number) => {
    setSelectedPackage({ credits, price });
    setPixModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background stars-bg">
      <Header />
      <main>
        <HeroSection />
        <SpecialOffersSection onBuy={handleBuyCredits} />
        <PackagesSection onBuy={handleBuyCredits} />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 lovablecreditos. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {selectedPackage && (
        <PixPaymentModal
          open={pixModalOpen}
          onClose={() => setPixModalOpen(false)}
          credits={selectedPackage.credits}
          price={selectedPackage.price}
        />
      )}
    </div>
  );
};

export default Index;
