import React from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a entrega dos créditos?",
    answer: "Após a confirmação do pagamento via PIX, os créditos são adicionados automaticamente à sua conta Lovable em até 5 minutos. Você receberá uma confirmação por e-mail assim que os créditos forem creditados."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos PIX (entrega instantânea), cartão de crédito (até 12x sem juros)"
  },
  {
    question: "Os créditos têm validade?",
    answer: "Não! Os créditos adquiridos não expiram. Você pode usá-los quando quiser, sem pressa. Eles ficam disponíveis na sua conta até serem utilizados."
  },
  {
    question: "Posso pedir reembolso?",
    answer: "Após o envio dos créditos, não há reembolso pois eles permanecem na sua conta. Caso ocorra algum problema na entrega, faremos o reembolso integral."
  },
  {
    question: "É seguro comprar neste site?",
    answer: "Absolutamente! Utilizamos criptografia de ponta a ponta e o pagamento via PIX é processado diretamente pelo seu banco, garantindo total segurança nas transações."
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-3xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Tire suas dúvidas sobre nossos serviços
        </p>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/30 rounded-xl px-6 bg-card/30 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
