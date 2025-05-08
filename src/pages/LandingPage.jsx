
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, Bot, Mic, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import PricingTable from "@/components/PricingTable";
import Features from "@/components/Features";

const LandingPage = () => {
  const { toast } = useToast();

  const handleAddBot = () => {
    toast({
      title: "Adicionando Orbi...",
      description: "Você será redirecionado para autorizar o bot Orbi em seu servidor Discord.",
    });
    // Adicionar link de convite do Orbi aqui
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1352328336784883732&permissions=8&integration_type=0&scope=bot';
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 md:pt-32 md:pb-40">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[120px] opacity-20"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-violet-500 rounded-full filter blur-[120px] opacity-20"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700/30">
              <span className="text-indigo-200 font-medium text-sm flex items-center gap-2">
                <Mic className="h-4 w-4" /> Transforme Áudio em Documentos
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Nunca mais perca insights de reuniões no Discord
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Orbi escuta suas reuniões em canais de voz, transcreve e gera automaticamente atas, resumos e documentos importantes para sua equipe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium px-8 py-6 h-auto rounded-xl shadow-lg shadow-indigo-900/30"
                onClick={handleAddBot}
              >
                Adicionar Orbi ao Discord
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-700 text-white hover:bg-slate-800 font-medium px-8 py-6 h-auto rounded-xl"
                onClick={() => document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver como funciona
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Discord Preview */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-4 pb-20"
      >
        <div className="relative mx-auto max-w-5xl rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/20 border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-violet-500/10 backdrop-blur-sm"></div>
          <img  alt="Interface do Discord com o bot Orbi transcrevendo uma reunião" className="w-full h-auto" src="/img/landing.jpg" />
        </div>
      </motion.section>
      
      {/* Logos Section */}
      <section className="container mx-auto px-4 py-16 border-t border-slate-800">
        <div className="text-center mb-10">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Empresas que documentam suas reuniões com Orbi</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {["Empresa Alfa", "Startup Beta", "Agência Gama", "Consultoria Delta", "Tech Sigma"].map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-xl md:text-2xl font-bold text-slate-400"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </section>
      
      <Features />
      <PricingTable />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-900/40 to-violet-900/40 backdrop-blur-sm p-12 rounded-2xl border border-indigo-800/30 relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full filter blur-[120px] opacity-20"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-violet-500 rounded-full filter blur-[120px] opacity-20"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar suas reuniões em conhecimento acionável?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Adicione Orbi ao seu servidor Discord e comece a gerar documentos automaticamente a partir das suas conversas em áudio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium px-8 py-6 h-auto rounded-xl shadow-lg shadow-indigo-900/30"
              onClick={handleAddBot}
            >
              Experimente Orbi Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-700 text-white hover:bg-slate-800 font-medium px-8 py-6 h-auto rounded-xl"
              onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Planos Detalhados
            </Button>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </>
  );
};

export default LandingPage;
