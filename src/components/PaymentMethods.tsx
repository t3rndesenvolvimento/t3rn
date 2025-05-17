
import { motion } from "framer-motion";
import { CreditCard, Landmark, QrCode, Banknote } from "lucide-react";

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
      description: "Pagamento instantâneo com desconto especial."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-t3rn-silver">
            Formas de <span className="text-t3rn-blue">pagamento</span>
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
              className="bg-card rounded-custom border border-border p-6 text-center hover:border-t3rn-blue/50 transition-all"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center text-t3rn-blue mb-4">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-t3rn-silver">{method.title}</h3>
              <p className="text-t3rn-silver/70 text-sm">{method.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="inline-block bg-muted px-6 py-3 rounded-custom text-t3rn-silver/80">
            Entre em contato para discutir planos e condições especiais para seu projeto
          </p>
        </motion.div>
      </div>
    </section>
  );
}
