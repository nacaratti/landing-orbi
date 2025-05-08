
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Bot, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Para alternar entre Login e Cadastro
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let error;
      if (isSignUp) {
        const { error: signUpError } = await signUp({ email, password });
        error = signUpError;
        if (!error) {
          toast({
            title: 'Cadastro realizado!',
            description: 'Verifique seu e-mail para confirmar sua conta.',
            variant: 'default',
          });
          // Não redireciona imediatamente, espera confirmação de email
        }
      } else {
        const { error: signInError } = await signIn({ email, password });
        error = signInError;
        if (!error) {
          toast({
            title: 'Login bem-sucedido!',
            description: 'Redirecionando para o dashboard...',
            variant: 'default',
          });
          navigate('/dashboard');
        }
      }

      if (error) {
        throw error;
      }
    } catch (error) {
      toast({
        title: 'Erro',
        description: error.message || (isSignUp ? 'Falha ao cadastrar.' : 'Falha ao fazer login.'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 to-indigo-950 text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-slate-900/70 backdrop-blur-md rounded-xl shadow-2xl border border-slate-800"
      >
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Orbi</span>
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-center mb-2">
          {isSignUp ? 'Crie sua Conta' : 'Bem-vindo de Volta!'}
        </h2>
        <p className="text-slate-400 text-center mb-8">
          {isSignUp ? 'Preencha os campos para começar a usar o Orbi.' : 'Acesse sua conta para gerenciar seu bot.'}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-slate-300">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <Label htmlFor="password"className="text-slate-300">Senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:ring-indigo-500"
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading} 
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium py-3"
          >
            {loading ? (isSignUp ? 'Cadastrando...' : 'Entrando...') : (isSignUp ? 'Criar Conta' : 'Entrar')}
            {!loading && <LogIn className="ml-2 h-5 w-5" />}
          </Button>
        </form>
        <p className="text-center text-sm text-slate-400 mt-8">
          {isSignUp ? 'Já tem uma conta? ' : 'Não tem uma conta? '}
          <button 
            onClick={() => setIsSignUp(!isSignUp)} 
            className="font-medium text-indigo-400 hover:underline"
          >
            {isSignUp ? 'Faça Login' : 'Cadastre-se'}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
