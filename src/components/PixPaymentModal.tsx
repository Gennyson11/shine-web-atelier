import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, QrCode, HelpCircle, MessageCircle, ChevronDown, ChevronUp, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import qrCodePix24 from "@/assets/qrcode-pix-24.jpeg";

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
  
  // Chave PIX real
  const pixKey = "00020101021126580014br.gov.bcb.pix0136247db185-9cfe-4b26-9a77-d1f33839828b520400005303986540524.005802BR5923GENNYSON M DE M OLIVEIR6010CERRO CORA62070503***63045D08";

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
      <DialogContent className="sm:max-w-md border-border p-0 gap-0 overflow-hidden [&>button]:hidden" aria-describedby="pix-modal-description">
        {/* Header com ícone */}
        <div className="relative pt-8 pb-4 flex flex-col items-center px-6">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-md hover:bg-muted transition-colors z-10"
            type="button"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
            <QrCode className="h-7 w-7 text-primary" />
          </div>
          
          <DialogTitle className="text-xl font-semibold text-center">
            Pagamento via <span className="text-primary">PIX</span>
          </DialogTitle>
          <DialogDescription id="pix-modal-description" className="text-sm text-muted-foreground text-center">
            {credits} créditos
          </DialogDescription>
          
          <p className="text-lg font-bold mt-2 text-foreground">
            Pague R$ {price.toFixed(2).replace('.', ',')}
          </p>
        </div>

        {/* QR Code */}
        <div className="px-6 pb-4">
          <div className="bg-white rounded-lg p-4 mx-auto w-fit">
            <img 
              src={qrCodePix24} 
              alt="QR Code PIX" 
              className="w-40 h-40 object-contain"
            />
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
            type="button"
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
            type="button"
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
            className="w-full border-green-500/50 text-green-500 hover:bg-green-500/10 hover:text-green-400"
            type="button"
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
