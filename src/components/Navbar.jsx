
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Bot, LogIn, LayoutDashboard, LogOut } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const isDashboardPage = location.pathname.startsWith('/dashboard');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinksLanding = [
    { name: "Recursos", href: "#recursos" },
    { name: "Preços", href: "#precos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
  ];

  // Links para Navbar da Dashboard (exemplo)
  const navLinksDashboard = [
    { name: "Visão Geral", href: "/dashboard" },
    { name: "Configurações do Bot", href: "/dashboard/settings" }, // Exemplo
    { name: "Documentos", href: "/dashboard/documents" }, // Exemplo
  ];
  
  const currentNavLinks = isDashboardPage ? navLinksDashboard : navLinksLanding;


  const handleAddBot = () => {
    toast({
      title: "Adicionar Orbi",
      description: "Esta funcionalidade será implementada em breve.",
    });
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: 'Logout realizado',
      description: 'Você foi desconectado com sucesso.',
    });
    navigate('/');
  };
  
  const handleNavLinkClick = (e, href) => {
    if (href.startsWith('#') && location.pathname === '/') {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else if (href.startsWith('/')) {
      navigate(href);
    }
    setMobileMenuOpen(false);
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isDashboardPage
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 mr-2 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" /> 
              </div>
              <span className="text-xl font-bold">Orbi</span> 
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {currentNavLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className={`text-sm font-medium text-slate-300 hover:text-white transition-colors ${location.pathname === link.href && 'text-indigo-400'}`}
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                {!isDashboardPage && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <Button variant="ghost" className="text-slate-300 hover:text-white" onClick={() => navigate('/dashboard')}>
                      <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
                    </Button>
                  </motion.div>
                )}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: isDashboardPage ? 0.4 : 0.5 }}>
                  <Button 
                    className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white"
                    onClick={handleSignOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Sair
                  </Button>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                  <Button variant="ghost" className="text-slate-300 hover:text-white" onClick={() => navigate('/login')}>
                    <LogIn className="mr-2 h-4 w-4" /> Login
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                  <Button 
                    className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
                    onClick={handleAddBot} 
                  >
                    Adicionar Orbi
                  </Button>
                </motion.div>
              </>
            )}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {currentNavLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 ${location.pathname === link.href && 'text-indigo-400'}`}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-800">
                  {user ? (
                    <>
                     {!isDashboardPage && (
                        <Button variant="ghost" className="justify-start text-slate-300 hover:text-white" onClick={() => { navigate('/dashboard'); setMobileMenuOpen(false); }}>
                          <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
                        </Button>
                      )}
                      <Button 
                        className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white justify-start"
                        onClick={() => { handleSignOut(); setMobileMenuOpen(false); }}
                      >
                        <LogOut className="mr-2 h-4 w-4" /> Sair
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" className="justify-start text-slate-300 hover:text-white" onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}>
                        <LogIn className="mr-2 h-4 w-4" /> Login
                      </Button>
                      <Button 
                        className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
                        onClick={() => { handleAddBot(); setMobileMenuOpen(false); }}
                      >
                        Adicionar Orbi
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
