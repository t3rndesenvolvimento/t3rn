
// Serviço para lidar com envio de formulários e dados

// Função para salvar mensagem de contato
export const saveContactMessage = async (formData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  try {
    // Simula um envio para API com Promise
    return new Promise<{ success: boolean; message: string }>((resolve) => {
      console.log("Dados do formulário de contato:", formData);
      
      // Simula atraso de rede para parecer mais real
      setTimeout(() => {
        // Em produção, aqui enviaria para um servidor real
        // Por enquanto apenas valida e retorna sucesso
        if (!formData.name || !formData.email || !formData.message) {
          resolve({ success: false, message: "Por favor, preencha todos os campos obrigatórios." });
          return;
        }

        if (!isValidEmail(formData.email)) {
          resolve({ success: false, message: "Por favor, forneça um e-mail válido." });
          return;
        }

        // Salva dados no localStorage como exemplo
        const storedMessages = localStorage.getItem('contactMessages');
        const messages = storedMessages ? JSON.parse(storedMessages) : [];
        
        messages.push({
          ...formData,
          id: Date.now(),
          date: new Date().toISOString()
        });
        
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        
        resolve({ 
          success: true, 
          message: "Mensagem enviada com sucesso! Entraremos em contato em breve." 
        });
      }, 800);
    });
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    return { success: false, message: "Ocorreu um erro ao enviar sua mensagem. Tente novamente." };
  }
};

// Função para salvar inscrição na newsletter
export const saveNewsletter = async (email: string) => {
  try {
    return new Promise<{ success: boolean; message: string }>((resolve) => {
      console.log("Email para newsletter:", email);
      
      setTimeout(() => {
        if (!email || !isValidEmail(email)) {
          resolve({ success: false, message: "Por favor, forneça um e-mail válido." });
          return;
        }

        // Salva no localStorage como exemplo
        const storedEmails = localStorage.getItem('newsletterEmails');
        const emails = storedEmails ? JSON.parse(storedEmails) : [];
        
        if (emails.includes(email)) {
          resolve({ success: false, message: "Este e-mail já está inscrito." });
          return;
        }
        
        emails.push(email);
        localStorage.setItem('newsletterEmails', JSON.stringify(emails));
        
        resolve({ 
          success: true, 
          message: "Obrigado por se inscrever em nossa newsletter!" 
        });
      }, 600);
    });
  } catch (error) {
    console.error("Erro ao salvar newsletter:", error);
    return { success: false, message: "Ocorreu um erro ao processar sua inscrição. Tente novamente." };
  }
};

// Validador simples de email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
