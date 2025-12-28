import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, QrCode, HelpCircle, MessageCircle, ChevronDown, ChevronUp, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PixPaymentModalProps {
  open: boolean;
  onClose: () => void;
  credits: number;
  price: number;
}

const PixPaymentModal: React.FC<PixPaymentModalProps> = ({
  open,
  onClose,
  credits,
  price,
}) => {
  const [helpOpen, setHelpOpen] = useState(false);
  const { toast } = useToast();
  
  // Chave PIX de exemplo - substitua pela real
  const pixKey = "616c37e1-5b48-4213-bf9a-9ec880a525af";

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    toast({
      title: "Chave copiada!",
      description: "A chave PIX foi copiada para sua área de transferência",
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Olá! Acabei de fazer um pagamento PIX de R$ ${price.toFixed(2).replace('.', ',')} para ${credits} créditos.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background border-border p-0 gap-0 overflow-hidden">
        {/* Header com ícone */}
        <div className="relative pt-8 pb-4 flex flex-col items-center">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 rounded-md hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
            <QrCode className="h-7 w-7 text-primary" />
          </div>
          
          <DialogHeader className="text-center space-y-1">
            <DialogTitle className="text-xl font-semibold">
              Pagamento via <span className="text-primary">PIX</span>
            </DialogTitle>
            <p className="text-sm text-muted-foreground">{credits} créditos</p>
          </DialogHeader>
          
          <p className="text-lg font-bold mt-2">
            Pague R$ {price.toFixed(2).replace('.', ',')}
          </p>
        </div>

        {/* QR Code */}
        <div className="px-6 pb-4">
          <div className="bg-white rounded-lg p-4 mx-auto w-fit">
            {/* QR Code placeholder - substitua por uma lib de QR code real */}
            <div className="w-40 h-40 bg-white flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* QR Code pattern simplificado */}
                <rect fill="#000" x="0" y="0" width="8" height="8"/>
                <rect fill="#000" x="10" y="0" width="4" height="4"/>
                <rect fill="#000" x="18" y="0" width="4" height="4"/>
                <rect fill="#000" x="26" y="0" width="8" height="8"/>
                <rect fill="#000" x="0" y="10" width="4" height="4"/>
                <rect fill="#000" x="12" y="10" width="4" height="4"/>
                <rect fill="#000" x="22" y="10" width="4" height="4"/>
                <rect fill="#000" x="30" y="10" width="4" height="4"/>
                <rect fill="#000" x="0" y="18" width="4" height="4"/>
                <rect fill="#000" x="8" y="18" width="8" height="4"/>
                <rect fill="#000" x="20" y="18" width="6" height="4"/>
                <rect fill="#000" x="30" y="18" width="4" height="4"/>
                <rect fill="#000" x="0" y="26" width="8" height="8"/>
                <rect fill="#000" x="12" y="26" width="4" height="4"/>
                <rect fill="#000" x="20" y="26" width="4" height="4"/>
                <rect fill="#000" x="26" y="26" width="8" height="8"/>
                {/* Mais padrões para parecer um QR code */}
                <rect fill="#000" x="40" y="0" width="4" height="4"/>
                <rect fill="#000" x="48" y="0" width="4" height="4"/>
                <rect fill="#000" x="56" y="0" width="4" height="4"/>
                <rect fill="#000" x="66" y="0" width="8" height="8"/>
                <rect fill="#000" x="78" y="0" width="8" height="8"/>
                <rect fill="#000" x="92" y="0" width="8" height="8"/>
                <rect fill="#000" x="40" y="8" width="4" height="4"/>
                <rect fill="#000" x="52" y="8" width="4" height="4"/>
                <rect fill="#000" x="60" y="8" width="4" height="4"/>
                <rect fill="#000" x="70" y="8" width="4" height="4"/>
                <rect fill="#000" x="82" y="8" width="4" height="4"/>
                <rect fill="#000" x="92" y="8" width="4" height="4"/>
                <rect fill="#000" x="40" y="16" width="8" height="4"/>
                <rect fill="#000" x="54" y="16" width="6" height="4"/>
                <rect fill="#000" x="66" y="16" width="4" height="4"/>
                <rect fill="#000" x="76" y="16" width="8" height="4"/>
                <rect fill="#000" x="92" y="16" width="4" height="4"/>
                {/* Centro */}
                <rect fill="#000" x="40" y="40" width="20" height="20"/>
                <rect fill="#fff" x="44" y="44" width="12" height="12"/>
                <rect fill="#000" x="48" y="48" width="4" height="4"/>
                {/* Bottom */}
                <rect fill="#000" x="0" y="66" width="8" height="8"/>
                <rect fill="#000" x="0" y="78" width="8" height="8"/>
                <rect fill="#000" x="0" y="92" width="8" height="8"/>
                <rect fill="#000" x="66" y="92" width="8" height="8"/>
                <rect fill="#000" x="78" y="92" width="8" height="8"/>
                <rect fill="#000" x="92" y="92" width="8" height="8"/>
                <rect fill="#000" x="92" y="78" width="8" height="8"/>
                <rect fill="#000" x="92" y="66" width="8" height="8"/>
              </svg>
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-3">
            Chave PIX (Clique para copiar)
          </p>
        </div>

        {/* Chave PIX */}
        <div className="px-6 pb-4">
          <div 
            onClick={handleCopyPixKey}
            className="flex items-center justify-between bg-muted/50 border border-border rounded-lg px-4 py-3 cursor-pointer hover:bg-muted transition-colors"
          >
            <span className="text-sm text-muted-foreground font-mono truncate flex-1">
              {pixKey}
            </span>
            <Copy className="h-4 w-4 text-muted-foreground ml-2 flex-shrink-0" />
          </div>
        </div>

        {/* Botão Copiar */}
        <div className="px-6 pb-4">
          <Button 
            onClick={handleCopyPixKey} 
            variant="hero" 
            className="w-full"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copiar Chave PIX
          </Button>
        </div>

        {/* Como receber - Accordion */}
        <div className="px-6 pb-4">
          <button
            onClick={() => setHelpOpen(!helpOpen)}
            className="flex items-center justify-between w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              <span>Como faço para receber?</span>
            </div>
            {helpOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          
          {helpOpen && (
            <div className="pb-3 text-sm text-muted-foreground space-y-2">
              <p>1. Copie a chave PIX acima</p>
              <p>2. Abra o app do seu banco</p>
              <p>3. Faça o pagamento via PIX</p>
              <p>4. Nos chame no WhatsApp com o comprovante</p>
              <p>5. Seus créditos serão adicionados em até 5 minutos!</p>
            </div>
          )}
        </div>

        {/* WhatsApp */}
        <div className="px-6 pb-6">
          <Button 
            onClick={handleWhatsApp}
            variant="outline" 
            className="w-full border-primary/30 text-primary hover:bg-primary/10"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Após efetuar a compra, nos chame no WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PixPaymentModal;
