
import { motion } from "framer-motion";
import { CreditCard, Landmark, QrCode, Banknote, Clock, Shield, Calendar } from "lucide-react";

export default function PaymentMethods() {
  const paymentMethods = [
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "Cartão de Crédito",
      description: "Parcele em até 12x com os principais cartões do mercado."
    },
    {
      icon: <QrCode className="w-10 h-10" />,
      title: "PIX",
      description: "Pagamento instantâneo com desconto especial de 5%."
    },
    {
      icon: <Landmark className="w-10 h-10" />,
      title: "Boleto Bancário",
      description: "Opção tradicional com prazo de vencimento flexível."
    },
    {
      icon: <Banknote className="w-10 h-10" />,
      title: "Transferência",
      description: "Transferência bancária para os principais bancos."
    }
  ];

  const deliveryInfo = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Prazos Flexíveis",
      description: "Projetos pequenos em 15 dias, médios em 30 dias e grandes em até 90 dias."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Entregas Parciais",
      description: "Acompanhamento semanal com entregas parciais para validação."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Garantia Total",
      description: "90 dias de garantia para correções e ajustes após a entrega."
    }
  ];

  const logos = [
    {
      name: "Mastercard",
      image: "https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png"
    },
    {
      name: "Visa",
      image: "https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png"
    },
    {
      name: "PIX",
      image: "https://logodownload.org/wp-content/uploads/2020/11/pix-bc-logo-2048x2048.png"
    },
    {
      name: "Banco do Brasil",
      image: "https://logodownload.org/wp-content/uploads/2014/05/banco-do-brasil-logo-1.png"
    },
    {
      name: "Itaú",
      image: "https://logodownload.org/wp-content/uploads/2016/09/itau-logo-1.png"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-cashDisplay mb-4 text-t3rn-silver">
            Formas de <span className="text-t3rn-gray-400">pagamento</span>
          </h2>
          <p className="text-lg text-t3rn-silver/70 max-w-3xl mx-auto">
            Oferecemos diversas opções para facilitar seu investimento
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border border-border p-6 text-center hover:border-t3rn-gray-600/50 hover:shadow-glow transition-all group"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center text-t3rn-gray-400 group-hover:text-t3rn-gray-300 transition-colors mb-4">
                {method.icon}
              </div>
              <h3 className="text-lg font-satoshi font-semibold mb-2 text-t3rn-silver">{method.title}</h3>
              <p className="text-t3rn-silver/70 text-sm">{method.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Logos de Pagamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-center text-t3rn-silver/60 mb-6 text-sm">Aceitamos os principais meios de pagamento</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="h-10 grayscale hover:grayscale-0 transition-all hover:scale-110"
              >
                <img src={logo.image} alt={logo.name} className="h-full w-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Prazos e Entregas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-cashDisplay mb-8 text-center text-t3rn-silver">
            Prazos e <span className="text-t3rn-gray-400">Entregas</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border hover:border-t3rn-gray-600/50 hover:shadow-glow transition-all group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-muted rounded-lg text-t3rn-gray-400 group-hover:text-t3rn-gray-300 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="font-satoshi font-medium text-lg text-t3rn-silver">{item.title}</h4>
                </div>
                <p className="text-t3rn-silver/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
