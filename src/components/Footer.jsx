
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  ArrowRight,
  Bot 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Produto",
      links: [
        { name: "Recursos", href: "#recursos" },
        { name: "Preços", href: "#precos" },
        { name: "Como funciona", href: "#" },
        { name: "Segurança", href: "#security" }, 
        { name: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre nós", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contato", href: "#" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { name: "Documentação", href: "#" },
        { name: "Tutoriais", href: "#" },
        { name: "Comunidade Discord", href: "#" }, 
        { name: "Status", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Termos de serviço", href: "terms" },
        { name: "Política de privacidade", href: "privacy" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  ];

  const handleAddBot = () => {
    console.log("Adicionar Orbi ao Discord a partir do footer");
    // Exemplo: window.location.href = 'SEU_LINK_DE_CONVITE_ORBI';
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="max-w-3xl mx-auto mb-16 bg-gradient-to-r from-indigo-900/30 to-violet-900/30 backdrop-blur-sm p-8 rounded-2xl border border-indigo-800/30">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">
              Fique por dentro das novidades do Orbi
            </h3>
            <p className="text-slate-400">
              Receba atualizações sobre novos recursos e melhorias na transcrição e documentação.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Seu endereço de email"
              className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white">
              Inscrever-se
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo e CTA no início */}
           <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
             <div className="flex items-center mb-4">
               <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 mr-2 flex items-center justify-center">
                 <Bot className="h-5 w-5 text-white" />
               </div>
               <span className="text-xl font-bold">Orbi</span>
             </div>
             <p className="text-sm text-slate-400 mb-4">Transforme áudio do Discord em documentos inteligentes.</p>
             <Button 
                size="sm" 
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white w-full sm:w-auto"
                onClick={handleAddBot}
              >
                Adicionar Orbi
              </Button>
           </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-sm text-slate-300 uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {currentYear} Orbi. Todos os direitos reservados.
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
