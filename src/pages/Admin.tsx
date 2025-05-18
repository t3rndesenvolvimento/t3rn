
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>T3RN Desenvolvimento | Área Administrativa</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="container mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-10 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o site
        </Link>
        
        <div className="flex flex-col items-center justify-center max-w-md mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img 
              src="/lovable-uploads/85cda223-d566-4e6b-8dc7-270b2b1a65d8.png" 
              alt="T3RN Desenvolvimento" 
              className="h-28 mx-auto" 
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gray-900 w-full p-8 rounded-xl border border-gray-800 shadow-elegant"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gray-800 rounded-full">
                <Lock className="h-6 w-6 text-gray-300" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-100">Acesso Administrativo</h1>
            
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-1 focus:ring-gray-400 focus:outline-none text-white"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">Senha</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-1 focus:ring-gray-400 focus:outline-none text-white"
                    placeholder="••••••••"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-500 text-white py-2 rounded-lg hover:from-gray-600 hover:to-gray-400 transition-all font-medium"
                >
                  Entrar
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                Esqueceu sua senha?
              </Link>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-gray-500 text-sm text-center"
          >
            © {new Date().getFullYear()} T3RN Desenvolvimento. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
