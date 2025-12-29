import React from "react";
import { CreditCard, Zap, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CreditCard,
    title: "Escolha seu pacote",
    description: "Selecione a quantidade de créditos ideal para você.",
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-gradient-to-br from-cyan-400/20 to-blue-500/20",
    borderColor: "border-cyan-400/30",
    numberBg: "bg-cyan-500",
  },
  {
    number: "02",
    icon: Zap,
    title: "Realize o pagamento",
    description: "Pague via PIX com segurança.",
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-gradient-to-br from-purple-400/20 to-violet-500/20",
    borderColor: "border-purple-400/30",
    numberBg: "bg-purple-500",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Receba instantaneamente",
    description: "Créditos adicionados na sua conta em segundos.",
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-gradient-to-br from-emerald-400/20 to-green-500/20",
    borderColor: "border-emerald-400/30",
    numberBg: "bg-emerald-500",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Como <span className="text-primary">Funciona</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16">
          Processo simples e rápido em apenas 3 passos
        </p>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step Card */}
              <div className="flex flex-col items-center text-center max-w-xs">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 rounded-2xl ${step.bgColor} ${step.borderColor} border flex items-center justify-center`}
                  >
                    <step.icon className="w-10 h-10 text-foreground" />
                  </div>
                  {/* Number Badge */}
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 ${step.numberBg} rounded-full flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>

              {/* Arrow (not after last item) */}
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-8 h-8 text-muted-foreground/50 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
