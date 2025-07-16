import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Database, Users, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
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
                <Shield className="h-4 w-4" /> Sua Privacidade é Fundamental
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Política de Privacidade
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Transparência sobre como coletamos, usamos e protegemos seus dados no Orbi.
            </p>
            
            <div className="text-sm text-slate-400">
              Última atualização: 16 de julho de 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 md:p-12"
          >
            <div className="prose prose-slate prose-invert max-w-none">
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Eye className="h-6 w-6 text-indigo-400" />
                  Introdução
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Esta Política de Privacidade descreve como o Orbi ("nós", "nosso" ou "serviço") coleta, usa e protege suas informações quando você usa nosso bot do Discord e serviços relacionados. Ao usar o Orbi, você concorda com a coleta e uso de informações de acordo com esta política.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Database className="h-6 w-6 text-indigo-400" />
                  Informações que Coletamos
                </h2>
                <div className="space-y-4 text-slate-300">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Dados de Áudio</h3>
                    <p className="leading-relaxed">
                      Coletamos e processamos gravações de áudio de canais de voz do Discord quando o Orbi está ativo. Estes dados são usados exclusivamente para transcrição e geração de documentos.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Informações do Usuário</h3>
                    <p className="leading-relaxed">
                      Coletamos IDs de usuário do Discord, nomes de usuário e informações de servidor necessárias para o funcionamento do bot. Não coletamos informações pessoais além daquelas fornecidas pelo Discord.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Dados de Uso</h3>
                    <p className="leading-relaxed">
                      Coletamos informações sobre como você usa o Orbi, incluindo comandos executados, frequência de uso e preferências de configuração para melhorar nossos serviços.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-indigo-400" />
                  Como Usamos suas Informações
                </h2>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Processar e transcrever áudio para gerar documentos e resumos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Fornecer e manter nossos serviços de transcrição e documentação</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Melhorar a precisão e qualidade das transcrições</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Personalizar a experiência do usuário com base em preferências</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Comunicar sobre atualizações e novos recursos do serviço</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Lock className="h-6 w-6 text-indigo-400" />
                  Proteção de Dados
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                  </p>
                  
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <h3 className="text-lg font-semibold text-white mb-2">Medidas de Segurança</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400">•</span>
                        <span>Criptografia de dados em trânsito e em repouso</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400">•</span>
                        <span>Acesso restrito a dados por pessoal autorizado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400">•</span>
                        <span>Monitoramento contínuo de segurança</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400">•</span>
                        <span>Auditorias regulares de segurança</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Compartilhamento de Dados</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Não vendemos, comercializamos ou transferimos suas informações pessoais para terceiros, exceto nas seguintes circunstâncias:
                </p>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Com seu consentimento explícito</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Para cumprir obrigações legais ou regulamentares</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Com provedores de serviços que nos ajudam a operar o Orbi</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Retenção de Dados</h2>
                <p className="text-slate-300 leading-relaxed">
                  Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política. Os dados de áudio são processados em tempo real e não são armazenados permanentemente, exceto quando necessário para melhorar nossos serviços de transcrição.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Seus Direitos</h2>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Acessar e revisar suas informações pessoais</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Solicitar correção de informações incorretas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Solicitar exclusão de suas informações</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Retirar seu consentimento para processamento de dados</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Alterações nesta Política</h2>
                <p className="text-slate-300 leading-relaxed">
                  Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página e atualizando a data de "última atualização".
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Entre em Contato</h2>
                <p className="text-slate-300 leading-relaxed">
                  Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
                </p>
                <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <p className="text-slate-300">
                    <strong>Email:</strong> privacy@orbi.com<br/>
                    <strong>Discord:</strong> Servidor de Suporte do Orbi
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;