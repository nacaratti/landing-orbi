
import React from "react";
import { motion } from "framer-motion";
import { 
  Mic, 
  FileText, 
  Zap, 
  Search, 
  Share2, 
  Clock 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Transcrição Automática de Áudio",
      description:
        "Com o comando /texto e selecionando o idioma, o Orbi entra nos seus canais de voz, ouve a conversa e transcreve tudo em tempo real com alta precisão.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Geração Inteligente de Documentos",
      description:
        "Com o comando /doc, você transforma as transcrições em atas de reunião, resumos executivos, listas de tarefas e outros formatos úteis.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Identificação de Falantes",
      description:
        "Saiba quem disse o quê. Orbi identifica os participantes da conversa na transcrição (disponível nos planos pagos) e gera áudios separados para cada participante da reunião.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Resumos Rápidos",
      description:
        "Não tem tempo para ler tudo? Peça a Orbi para gerar um resumo conciso dos pontos principais da reunião.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Pesquisa no Conteúdo",
      description:
        "Encontre facilmente informações específicas dentro das transcrições e documentos gerados.",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Exportação e Compartilhamento",
      description:
        "Exporte seus documentos em diversos formatos (Markdown, PDF, Docs) e compartilhe facilmente com a equipe.",
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
    <section id="recursos" className="container mx-auto px-4 py-20 border-t border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Do áudio à ação, sem esforço
        </h2>
        <p className="text-lg text-slate-300">
          Descubra como Orbi simplifica a captura e o uso das informações discutidas nas suas reuniões de voz no Discord.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover-card-effect"
          >
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-slate-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
