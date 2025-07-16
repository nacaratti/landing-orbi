import React from "react";
import { motion } from "framer-motion";
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfServicePage = () => {
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
                <Scale className="h-4 w-4" /> Termos Claros e Transparentes
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Termos de Serviço
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Entenda seus direitos e responsabilidades ao usar o Orbi.
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
                  <FileText className="h-6 w-6 text-indigo-400" />
                  Acordo de Termos
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Estes Termos de Serviço ("Termos") governam o uso do bot Orbi ("Serviço") operado pela nossa empresa ("nós", "nosso" ou "Orbi"). Ao usar nosso Serviço, você concorda em ficar vinculado a estes Termos.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  Uso Aceito
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    Você pode usar o Orbi para:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Transcrever reuniões e conversas em canais de voz do Discord</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Gerar documentos e resumos a partir de áudio</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Organizar e documentar informações de reuniões</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Melhorar a produtividade da equipe através de documentação automatizada</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <XCircle className="h-6 w-6 text-red-400" />
                  Uso Proibido
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    Você não deve usar o Orbi para:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Gravar ou transcrever conversas sem o consentimento de todos os participantes</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Violar leis locais, estaduais, nacionais ou internacionais</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Transmitir conteúdo abusivo, difamatório ou prejudicial</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Tentar contornar medidas de segurança ou acessar sistemas não autorizados</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Usar o serviço para fins comerciais não autorizados</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contas de Usuário</h2>
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    Para usar certas funcionalidades do Orbi, você pode precisar criar uma conta. Você é responsável por:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Manter a confidencialidade de suas credenciais de conta</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Todas as atividades que ocorrem sob sua conta</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Notificar-nos imediatamente sobre qualquer uso não autorizado</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Propriedade Intelectual</h2>
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    O Serviço e todo o conteúdo, recursos e funcionalidades são propriedade do Orbi e são protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <h3 className="text-lg font-semibold text-white mb-2">Conteúdo Gerado</h3>
                    <p className="leading-relaxed">
                      Você mantém a propriedade do conteúdo que você cria usando o Orbi, incluindo transcrições e documentos gerados. Concedemos a você uma licença para usar este conteúdo conforme necessário.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Disponibilidade do Serviço</h2>
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    Nos esforçamos para manter o Orbi disponível 24/7, mas não podemos garantir tempo de atividade ininterrupto. O serviço pode estar temporariamente indisponível devido a:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Manutenção programada ou de emergência</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Problemas técnicos ou de conectividade</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Atualizações de software ou melhorias</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Planos e Pagamentos</h2>
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    Alguns recursos do Orbi podem ser oferecidos através de planos pagos. Termos específicos sobre pagamentos, cancelamentos e reembolsos serão fornecidos no momento da compra.
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <h3 className="text-lg font-semibold text-white mb-2">Política de Cancelamento</h3>
                    <p className="leading-relaxed">
                      Você pode cancelar sua assinatura a qualquer momento. O cancelamento entrará em vigor no final do período de cobrança atual.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  Limitação de Responsabilidade
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    O Orbi é fornecido "como está" sem garantias de qualquer tipo. Não nos responsabilizamos por:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Precisão das transcrições ou documentos gerados</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Perda de dados ou interrupções de serviço</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Danos diretos, indiretos ou consequentes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Rescisão</h2>
                <p className="text-slate-300 leading-relaxed">
                  Podemos rescindir ou suspender sua conta e acesso ao Serviço imediatamente, sem aviso prévio, por qualquer motivo, incluindo violação destes Termos. Você também pode encerrar sua conta a qualquer momento.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Alterações nos Termos</h2>
                <p className="text-slate-300 leading-relaxed">
                  Reservamos o direito de modificar estes Termos a qualquer momento. Notificaremos você sobre alterações significativas publicando os novos Termos nesta página. O uso continuado do Serviço após as alterações constitui aceitação dos novos Termos.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Lei Aplicável</h2>
                <p className="text-slate-300 leading-relaxed">
                  Estes Termos são regidos pelas leis do Brasil. Quaisquer disputas serão resolvidas nos tribunais competentes.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Entre em Contato</h2>
                <p className="text-slate-300 leading-relaxed">
                  Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco:
                </p>
                <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <p className="text-slate-300">
                    <strong>Email:</strong> legal@orbi.com<br/>
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

export default TermsOfServicePage;