
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Xinverzao = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Helmet>
        <title>T3RN Desenvolvimento | Xinverzao</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <header className="p-6 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <span>Voltar</span>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mb-8">
              <img 
                src="/lovable-uploads/85cda223-d566-4e6b-8dc7-270b2b1a65d8.png" 
                alt="T3RN Desenvolvimento" 
                className="h-40 mx-auto" 
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-cashDisplay font-bold text-transparent bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 bg-clip-text mb-6">
              Xinverzao
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Área exclusiva de desenvolvimento e testes avançados. Acesso restrito.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-200">Ferramentas Internas</h2>
              <p className="text-gray-400 mb-4">
                Acesso às ferramentas de desenvolvimento, monitoramento e automação para equipe interna.
              </p>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gray-500 to-gray-300 w-3/4" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-200">Projetos Avançados</h2>
              <p className="text-gray-400 mb-4">
                Visualização de projetos em desenvolvimento e protótipos ainda não publicados.
              </p>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gray-500 to-gray-300 w-2/3" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-200">Estatísticas</h2>
              <p className="text-gray-400 mb-4">
                Métricas e análises de performance dos projetos em produção.
              </p>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gray-500 to-gray-300 w-4/5" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-200">Admin</h2>
              <p className="text-gray-400 mb-4">
                Painel administrativo para gerenciamento de conteúdo e usuários.
              </p>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gray-500 to-gray-300 w-1/2" />
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 text-center text-gray-500 text-sm"
          >
            Esta é uma área exclusiva da T3RN Desenvolvimento.
            <br />
            © {new Date().getFullYear()} T3RN Desenvolvimento. Todos os direitos reservados.
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Xinverzao;
