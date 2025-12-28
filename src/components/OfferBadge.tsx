import React from "react";
import { Sparkles } from "lucide-react";

interface OfferBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const OfferBadge: React.FC<OfferBadgeProps> = ({ children, variant = "primary" }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
      <Sparkles className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-primary">{children}</span>
    </div>
  );
};

export default OfferBadge;
