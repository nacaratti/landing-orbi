
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Bot, Settings, LogOut, BarChart3, FileText, Bell, Users, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar'; // Reutilizar o Navbar, mas ele será adaptado
import Footer from '@/components/Footer'; // Reutilizar o Footer

// Mock data - substituir por dados reais do Supabase
const mockBotData = {
  name: 'Orbi Bot',
  status: 'Ativo',
  serverCount: 5,
  transcriptionsToday: 23,
  documentsGenerated: 150,
  plan: 'Pro',
};

const mockRecentActivity = [
  { id: 1, type: 'Transcrição', description: 'Reunião "Planejamento Sprint Q3" no servidor DevTeam', time: '2 horas atrás' },
  { id: 2, type: 'Documento Gerado', description: 'Ata da reunião "Alinhamento Marketing"', time: '5 horas atrás' },
  { id: 3, type: 'Alerta', description: 'Limite de transcrições do plano gratuito atingido no servidor "Testes"', time: '1 dia atrás' },
];

const DashboardPage = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [botData, setBotData] = useState(mockBotData); // Usar mock por enquanto
  const [recentActivity, setRecentActivity] = useState(mockRecentActivity); // Usar mock

  // TODO: Função para buscar dados reais do bot do Supabase
  // useEffect(() => {
  //   const fetchBotData = async () => {
  //     if (user) {
  //       // Exemplo: const { data, error } = await supabase.from('bots').select('*').eq('user_id', user.id).single();
  //       // if (data) setBotData(data);
  //       // if (error) toast({ title: 'Erro ao buscar dados do bot', description: error.message, variant: 'destructive' });
  //     }
  //   };
  //   fetchBotData();
  // }, [user, toast]);

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: 'Logout realizado',
      description: 'Você foi desconectado com sucesso.',
    });
  };

  const StatCard = ({ title, value, icon, color }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-center space-x-4"
    >
      <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
        {React.cloneElement(icon, { className: "h-6 w-6 text-white" })}
      </div>
      <div>
        <p className="text-sm text-slate-400">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 to-indigo-950 text-white">
      <Navbar /> {/* Navbar será adaptado para contexto de dashboard */}
      
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 md:pt-28">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Dashboard Orbi</h1>
            <p className="text-slate-400">Bem-vindo, {user?.email || 'Usuário'}!</p>
          </div>
          <Button onClick={handleSignOut} variant="outline" className="mt-4 md:mt-0 border-slate-700 hover:bg-slate-800">
            <LogOut className="mr-2 h-4 w-4" /> Sair
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Status do Bot" value={botData.status} icon={<Bot />} color="from-green-500 to-emerald-600" />
          <StatCard title="Servidores Conectados" value={botData.serverCount} icon={<Users />} color="from-blue-500 to-sky-600" />
          <StatCard title="Transcrições Hoje" value={botData.transcriptionsToday} icon={<FileText />} color="from-purple-500 to-violet-600" />
          <StatCard title="Plano Atual" value={botData.plan} icon={<Settings />} color="from-yellow-500 to-amber-600" />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-slate-900/50 p-6 rounded-xl border border-slate-800"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center"><BarChart3 className="mr-2 h-5 w-5 text-indigo-400"/> Atividade Recente</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {recentActivity.map(activity => (
                <div key={activity.id} className="p-4 bg-slate-800/70 rounded-lg border border-slate-700/50">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${activity.type === 'Transcrição' ? 'bg-blue-500/20 text-blue-300' : activity.type === 'Documento Gerado' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                        {activity.type}
                      </span>
                      <p className="mt-1 text-slate-300">{activity.description}</p>
                    </div>
                    <p className="text-xs text-slate-500 whitespace-nowrap">{activity.time}</p>
                  </div>
                </div>
              ))}
              {recentActivity.length === 0 && <p className="text-slate-400">Nenhuma atividade recente.</p>}
            </div>
          </motion.div>

          {/* Bot Configuration / Quick Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-900/50 p-6 rounded-xl border border-slate-800"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center"><Settings className="mr-2 h-5 w-5 text-indigo-400"/> Configurações Rápidas</h2>
            <div className="space-y-4">
              <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700">
                <Bell className="mr-2 h-4 w-4" /> Gerenciar Notificações
              </Button>
              <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700">
                <Users className="mr-2 h-4 w-4" /> Convidar Orbi para outro servidor
              </Button>
              <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700">
                <FileText className="mr-2 h-4 w-4" /> Ver todos os documentos
              </Button>
              <Button variant="outline" className="w-full justify-start border-slate-700 hover:bg-slate-800">
                <HelpCircle className="mr-2 h-4 w-4" /> Central de Ajuda
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer /> {/* Footer será adaptado para contexto de dashboard */}
    </div>
  );
};

export default DashboardPage;
