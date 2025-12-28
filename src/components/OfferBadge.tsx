import React from "react";
import { Sparkles } from "lucide-react";

interface OfferBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const OfferBadge: React.FC<OfferBadgeProps> = ({ children, variant = "primary" }) => {
  const baseClasses = "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium";
  const variantClasses = variant === "primary" 
    ? "bg-primary/10 text-primary border border-primary/20" 
    : "bg-success-light text-success border border-success/20";

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      <Sparkles className="h-4 w-4" />
      {children}
    </div>
  );
};

export default OfferBadge;
