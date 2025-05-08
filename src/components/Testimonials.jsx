
import React from "react";
import { motion } from "framer-motion";
import { Star, Bot } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "Orbi é incrível! Gerar atas de reunião automaticamente a partir do áudio do Discord economizou muito tempo da nossa equipe. A precisão da transcrição é impressionante.",
      author: "Carlos Andrade",
      role: "Líder de Equipe, DevMasters",
      rating: 5,
      image: "man-developer-headshot" 
    },
    {
      id: 2,
      content:
        "Finalmente uma solução para documentar nossas discussões de brainstorming no Discord! Orbi captura tudo e facilita a consulta posterior. Recomendo fortemente.",
      author: "Beatriz Ferraz",
      role: "Designer de Produto, CriaTech",
      rating: 5,
      image: "woman-designer-portrait"
    },
    {
      id: 3,
      content:
        "A integração do Orbi foi simples e o valor que ele agrega é enorme. Conseguimos manter um registro claro das decisões tomadas nas reuniões de voz, melhorando nossa organização.",
      author: "Lucas Martins",
      role: "Gerente de Projetos, Sync Solutions",
      rating: 4,
      image: "man-project-manager"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="depoimentos" className="container mx-auto px-4 py-20 border-t border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Equipes que não perdem mais tempo documentando reuniões
        </h2>
        <p className="text-lg text-slate-300">
          Veja como Orbi está ajudando empresas a transformar conversas em áudio em documentos valiosos.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover-card-effect"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonial.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-slate-700"
                  }`}
                />
              ))}
            </div>
            <p className="text-slate-300 mb-6">{testimonial.content}</p>
            <div className="flex items-center">
              <div className="mr-4 rounded-full overflow-hidden w-12 h-12 bg-slate-800">
                 {/* Usar img-replace para novas imagens */}
                 <img  alt={`Foto de ${testimonial.author}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1557862921-37829c790f19" />
                 {/* Exemplo com img-replace: <img  class="w-full h-full object-cover" alt={`Foto de ${testimonial.author}`} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" /> */}
              </div>
              <div>
                <h4 className="font-medium">{testimonial.author}</h4>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-slate-300 flex items-center justify-center gap-2">
          <Bot className="h-5 w-5 text-indigo-400" />
          Junte-se a centenas de equipes que confiam na <span className="font-bold text-white">Orbi</span> para documentar suas reuniões.
        </p>
      </motion.div>
    </section>
  );
};

export default Testimonials;
