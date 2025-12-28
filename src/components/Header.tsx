import React from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <HeartIcon size={32} />
          <span className="text-xl font-bold text-foreground">Lovaly.dev</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/auth">
            <Button variant="nav" size="default">
              <LogIn className="mr-2 h-4 w-4" />
              Entrar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
