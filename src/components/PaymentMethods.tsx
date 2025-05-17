
import { motion } from "framer-motion";
import { CreditCard, Landmark, QrCode, CalendarClock, Shield, Clock } from "lucide-react";

export default function PaymentMethods() {
  const paymentMethods = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Cartão de Crédito",
      description: "Parcele em até 12x sem juros nos principais cartões."
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "PIX",
      description: "Pagamento instantâneo com 10% de desconto à vista."
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Transferência",
      description: "Transferência bancária com 8% de desconto."
    },
    {
      icon: <CalendarClock className="w-6 h-6" />,
      title: "Parcelamento",
      description: "Financiamento direto em até 24x."
    }
  ];

  const deliveryInfo = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Entregas no Prazo",
      description: "Sites em 15 dias, sistemas em 45 dias e projetos complexos em até 90 dias.",
      detail: "Cronograma detalhado com marcos de entrega claros e definidos no início do projeto."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Garantia Completa",
      description: "90 dias de garantia para todos os projetos com suporte técnico especializado.",
      detail: "Contrato com SLA definido e tempo de resposta máximo de 4 horas em dias úteis."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm mb-4">
              <span>Flexibilidade para você</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Formas de <span className="text-gradient-gray">pagamento</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              Oferecemos diversas opções para facilitar seu investimento, com transparência e segurança.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-elegant flex items-start gap-4"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{method.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Payment Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Aceitamos as principais bandeiras:</p>
              <div className="flex flex-wrap justify-start items-center gap-6">
                {[
                  "https://cdn.worldvectorlogo.com/logos/visa-logo-800x286.svg",
                  "https://cdn.worldvectorlogo.com/logos/mastercard-2.svg",
                  "https://logospng.org/download/american-express/logo-american-express-1024.png",
                  "https://cdn.worldvectorlogo.com/logos/pix-4.svg",
                  "https://logodownload.org/wp-content/uploads/2017/04/bradesco-logo-1.png"
                ].map((logo, index) => (
                  <img 
                    key={index}
                    src={logo}
                    alt={`Payment method ${index + 1}`}
                    className="h-8 object-contain"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Delivery Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm mb-4">
              <span>Compromisso com você</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Prazos e <span className="text-gradient-gray">entregas</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              Cumprimos rigorosamente nossos cronogramas e mantemos você informado em cada etapa.
            </p>
            
            <div className="space-y-6">
              {deliveryInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-elegant overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Process Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-elegant"
            >
              <h3 className="font-semibold text-xl mb-6 text-gray-900 dark:text-white">Ciclo de projeto</h3>
              
              <div className="space-y-6">
                {[
                  { step: 1, title: "Descoberta e Planejamento", duration: "1-2 semanas" },
                  { step: 2, title: "Desenvolvimento", duration: "2-8 semanas" },
                  { step: 3, title: "Testes e Revisões", duration: "1-2 semanas" },
                  { step: 4, title: "Lançamento", duration: "1 semana" }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-900 dark:text-white font-bold">
                      {phase.step}
                    </div>
                    <div className="flex-grow border-b border-gray-200 dark:border-gray-700 pb-4">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900 dark:text-white">{phase.title}</span>
                        <span className="text-sm text-gray-500">{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
