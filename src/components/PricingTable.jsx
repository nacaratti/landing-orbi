
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle, X, Bot } from "lucide-react";

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleAddBot = (planName) => {
    console.log(`Adicionando plano Orbi ${planName} ao Discord`);
    // Lógica para adicionar o bot com o plano específico
    // Exemplo: window.location.href = `SEU_LINK_DE_CONVITE_ORBI?plan=${planName}`;
  };

  // Planos podem ser baseados em minutos de áudio processados, número de documentos, etc.
  const plans = [
    {
      name: "Teste Gratuito",
      description: "Experimente Orbi com limites mensais",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        { name: "Transcrição de até 60 min/mês", included: true },
        { name: "Geração de até 10 documentos/mês", included: true },
        { name: "Comandos básicos de controle", included: true },
        { name: "Suporte comunitário", included: true },
        { name: "Identificação de falantes (limitado)", included: false },
        { name: "Formatos de exportação premium", included: false },
        { name: "Suporte prioritário", included: false },
      ],
      popular: false,
      ctaText: "Começar Gratuitamente",
    },
    {
      name: "Pro",
      description: "Ideal para equipes ativas e uso frequente",
      monthlyPrice: 25, // Exemplo de preço
      annualPrice: 250, // Exemplo de preço
      features: [
        { name: "Transcrição de até 1000 min/mês", included: true },
        { name: "Geração de documentos ilimitada", included: true },
        { name: "Todos os comandos", included: true },
        { name: "Suporte por email", included: true },
        { name: "Identificação de falantes", included: true },
        { name: "Formatos de exportação premium", included: true },
        { name: "Suporte prioritário (8h)", included: false },
      ],
      popular: true,
      ctaText: "Adicionar Plano Pro",
    },
    {
      name: "Business", // Renomeado de Enterprise
      description: "Para grandes equipes com alto volume de reuniões",
      monthlyPrice: 75, // Exemplo de preço
      annualPrice: 750, // Exemplo de preço
      features: [
        { name: "Transcrição ilimitada", included: true },
        { name: "Geração de documentos ilimitada", included: true },
        { name: "Todos os comandos Pro", included: true },
        { name: "Suporte dedicado (Chat/Email)", included: true },
        { name: "Identificação de falantes avançada", included: true },
        { name: "Todos formatos de exportação", included: true },
        { name: "Suporte prioritário 24/7", included: true },
        // Poderia adicionar: Análise de sentimento, Integrações customizadas, etc.
      ],
      popular: false,
      ctaText: "Adicionar Plano Business", // CTA mais direto se o preço for fixo
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="precos" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Escolha o plano Orbi ideal para sua equipe
        </h2>
        <p className="text-lg text-slate-300 mb-8">
          Comece gratuitamente e faça upgrade conforme suas necessidades de transcrição e documentação aumentam.
        </p>

        <div className="flex items-center justify-center mb-8">
          <span className="text-slate-400 mr-4">Cobrança:</span>
          <div className="bg-slate-800/50 p-1 rounded-full">
            <div className="flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isAnnual
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-slate-300"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isAnnual
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-slate-300"
                }`}
              >
                Anual <span className="text-xs opacity-80">(Economize ~17%)</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={itemVariants}
            className={`relative rounded-2xl border ${
              plan.popular
                ? "border-indigo-500 bg-gradient-to-b from-indigo-900/20 to-violet-900/20"
                : "border-slate-800 bg-slate-900/50"
            } p-8 hover-card-effect flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                Mais popular
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm h-10">{plan.description}</p> {/* Altura fixa para alinhar */}
            </div>

            <div className="mb-6">
              {plan.monthlyPrice !== null ? (
                <>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">
                      R${isAnnual && plan.annualPrice !== null ? (plan.annualPrice / 12).toFixed(0) : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-400 ml-2 mb-1">/mês</span>
                  </div>
                  {isAnnual && plan.annualPrice !== null && plan.annualPrice > 0 && (
                    <p className="text-indigo-400 text-sm mt-1">
                      Faturado anualmente (R${plan.annualPrice}/ano)
                    </p>
                  )}
                   {plan.monthlyPrice === 0 && (
                     <p className="text-slate-400 text-sm mt-1">Sem custo inicial</p>
                   )}
                </>
              ) : (
                 // Caso de preço personalizado (se necessário no futuro)
                <div className="h-[68px] flex items-center"> 
                  <span className="text-2xl font-bold">Personalizado</span>
                </div>
              )}
            </div>

            <div className="mb-8 flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-start text-sm"
                  >
                    {feature.included ? (
                      <Check className="h-5 w-5 text-indigo-400 mr-2 shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-slate-600 mr-2 shrink-0 mt-0.5" />
                    )}
                    <span
                      className={
                        feature.included ? "text-slate-300" : "text-slate-500"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={() => handleAddBot(plan.name)}
              className={`w-full mt-auto ${
                plan.popular
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
                  : plan.monthlyPrice === 0 ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-indigo-600/80 hover:bg-indigo-700 text-white"
              }`}
            >
              {plan.ctaText}
              <Bot className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <p className="text-slate-400 flex items-center justify-center gap-2">
          <HelpCircle className="h-4 w-4" />
          Precisa de um plano maior ou funcionalidades específicas?{" "}
          <a href="#" className="text-indigo-400 hover:underline">
            Fale conosco
          </a>
        </p>
      </div>
    </section>
  );
};

export default PricingTable;
