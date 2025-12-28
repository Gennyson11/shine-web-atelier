import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { LogOut, CreditCard, User, Loader2 } from "lucide-react";
import HeartIcon from "@/components/HeartIcon";
import OfferCard from "@/components/OfferCard";
import PackageCard from "@/components/PackageCard";
import OfferBadge from "@/components/OfferBadge";

interface Profile {
  id: string;
  user_id: string;
  name: string;
  email: string;
  credits: number;
}

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

const packages = [
  { credits: 50, price: 8, pricePerCredit: 0.16 },
  { credits: 100, price: 16, pricePerCredit: 0.16 },
  { credits: 250, price: 40, pricePerCredit: 0.16 },
  { credits: 500, price: 80, pricePerCredit: 0.16 },
  { credits: 1000, price: 160, pricePerCredit: 0.16 },
  { credits: 2000, price: 240, pricePerCredit: 0.12 },
];

const Dashboard: React.FC = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_id", user.id)
          .maybeSingle();

        if (error) {
          console.error("Error fetching profile:", error);
        } else {
          setProfile(data);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "Até logo!",
      description: "Você saiu da sua conta",
    });
    navigate("/");
  };

  const handleBuyCredits = (credits: number, price: number) => {
    toast({
      title: "Compra de créditos",
      description: `Em breve você poderá comprar ${credits} créditos por R$ ${price}`,
    });
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartIcon size={32} />
            <span className="text-xl font-bold text-foreground">Lovaly.dev</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <CreditCard className="h-4 w-4 text-primary" />
              <span className="font-semibold">{profile?.credits || 0} créditos</span>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{profile?.name || user?.email}</span>
            </div>
            
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Olá, {profile?.name || "Usuário"}!
          </h1>
          <p className="text-muted-foreground">
            Você tem <span className="text-primary font-semibold">{profile?.credits || 0} créditos</span> disponíveis
          </p>
        </div>

        {/* Mobile Credits Card */}
        <div className="sm:hidden mb-8 bg-gradient-card border border-primary/20 rounded-xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CreditCard className="h-5 w-5 text-primary" />
            <span className="text-2xl font-bold">{profile?.credits || 0}</span>
          </div>
          <span className="text-sm text-muted-foreground">créditos disponíveis</span>
        </div>

        {/* Special Offers */}
        <section className="mb-12">
          <div className="flex flex-col items-center mb-8">
            <OfferBadge>Ofertas por Tempo Limitado</OfferBadge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
              Ofertas Especiais
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialOffers.map((offer, index) => (
              <div key={offer.credits} onClick={() => handleBuyCredits(offer.credits, offer.discountedPrice)} className="cursor-pointer">
                <OfferCard {...offer} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* Regular Packages */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Escolha seu pacote
            </h2>
            <p className="text-muted-foreground">
              Todos os pacotes incluem créditos oficiais Lovable com entrega automática.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {packages.map((pkg, index) => (
              <div key={pkg.credits} onClick={() => handleBuyCredits(pkg.credits, pkg.price)} className="cursor-pointer">
                <PackageCard {...pkg} index={index} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
