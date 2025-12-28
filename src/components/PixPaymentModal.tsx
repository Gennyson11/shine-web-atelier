import React, { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
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

  if (!open) return null;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content 
          className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-xl border border-gray-700 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 overflow-hidden max-h-[90vh] overflow-y-auto"
          style={{ backgroundColor: '#1a1625' }}
        >
          <DialogPrimitive.Title className="sr-only">Pagamento via PIX</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">Complete o pagamento via PIX</DialogPrimitive.Description>
          
          {/* Header */}
          <div className="relative pt-8 pb-4 flex flex-col items-center px-6">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 rounded-md hover:bg-white/10 transition-colors z-10"
              type="button"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
            
            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <QrCode className="h-7 w-7 text-purple-400" />
            </div>
            
            <h2 className="text-xl font-semibold text-white text-center">
              Pagamento via <span className="text-purple-400">PIX</span>
            </h2>
            <p className="text-sm text-gray-400 text-center mt-1">
              {credits} créditos
            </p>
            
            <p className="text-lg font-bold mt-2 text-white">
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
            
            <p className="text-center text-sm text-gray-400 mt-3">
              Chave PIX (Clique para copiar)
            </p>
          </div>

          {/* Chave PIX */}
          <div className="px-6 pb-4">
            <div 
              onClick={handleCopyPixKey}
              className="flex items-center justify-between bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-800 transition-colors"
            >
              <span className="text-sm text-gray-400 font-mono truncate flex-1">
                {pixKey}
              </span>
              <Copy className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
            </div>
          </div>

          {/* Botão Copiar */}
          <div className="px-6 pb-4">
            <Button 
              onClick={handleCopyPixKey} 
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
              type="button"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copiar Chave PIX
            </Button>
          </div>

          {/* Como receber */}
          <div className="px-6 pb-4">
            <button
              onClick={() => setHelpOpen(!helpOpen)}
              className="flex items-center justify-between w-full text-left py-3 text-sm text-gray-400 hover:text-gray-200 transition-colors"
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
              <div className="pb-3 text-sm text-gray-400 space-y-2">
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
              className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300 bg-transparent"
              type="button"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Após efetuar a compra, nos chame no WhatsApp
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default PixPaymentModal;
