
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Configurar CORS
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:3000', 'https://lovable.dev'],
  credentials: true
}));

app.use(express.json());

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Rota para envio de emails
app.post('/send-email', async (req, res) => {
  try {
    const { type, name, email, phone, message } = req.body;
    
    console.log('Processando requisição de email:', { type, email, name });

    let emailResponse;

    if (type === 'contact') {
      // Enviar email de contato para admin
      emailResponse = await resend.emails.send({
        from: "T3RN <contato@t3rn.com.br>",
        to: ["contato@t3rn.com.br"],
        subject: `Nova mensagem de contato - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1f2937;">Nova mensagem de contato</h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
              <p><strong>Mensagem:</strong></p>
              <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #dc2626;">${message}</p>
            </div>
            <p style="color: #6b7280; font-size: 12px;">
              Esta mensagem foi enviada através do formulário de contato do site T3RN.
            </p>
          </div>
        `,
      });

      // Enviar email de confirmação para o usuário
      await resend.emails.send({
        from: "T3RN <contato@t3rn.com.br>",
        to: [email],
        subject: "Recebemos sua mensagem - T3RN",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1f2937;">Obrigado pelo contato, ${name}!</h2>
            <p>Recebemos sua mensagem e retornaremos o mais breve possível.</p>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Sua mensagem:</h3>
              <p style="background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
            </div>
            <p>Nossa equipe analisará sua solicitação e entrará em contato em até 24 horas.</p>
            <p style="margin-top: 30px;">
              Atenciosamente,<br>
              <strong>Equipe T3RN</strong>
            </p>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              T3RN Desenvolvimento Digital<br>
              São Paulo, SP - Brasil<br>
              contato@t3rn.com.br
            </p>
          </div>
        `,
      });

    } else if (type === 'newsletter') {
      // Enviar email de boas-vindas para newsletter
      emailResponse = await resend.emails.send({
        from: "T3RN <contato@t3rn.com.br>",
        to: [email],
        subject: "Bem-vindo à nossa newsletter - T3RN",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1f2937;">Bem-vindo à newsletter T3RN!</h2>
            <p>Obrigado por se inscrever em nossa newsletter. Você receberá as últimas novidades sobre tecnologia, desenvolvimento web e nossas ofertas especiais.</p>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>O que você receberá:</h3>
              <ul>
                <li>Tendências em desenvolvimento web</li>
                <li>Dicas de tecnologia</li>
                <li>Novidades sobre nossos serviços</li>
                <li>Ofertas exclusivas</li>
              </ul>
            </div>
            <p>Se você não solicitou esta inscrição, pode ignorar este email.</p>
            <p style="margin-top: 30px;">
              Atenciosamente,<br>
              <strong>Equipe T3RN</strong>
            </p>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              T3RN Desenvolvimento Digital<br>
              São Paulo, SP - Brasil<br>
              contato@t3rn.com.br
            </p>
          </div>
        `,
      });

      // Notificar admin sobre nova inscrição
      await resend.emails.send({
        from: "T3RN <contato@t3rn.com.br>",
        to: ["contato@t3rn.com.br"],
        subject: "Nova inscrição na newsletter",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1f2937;">Nova inscrição na newsletter</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p style="color: #6b7280; font-size: 12px;">
              Inscrição realizada em: ${new Date().toLocaleString('pt-BR')}
            </p>
          </div>
        `,
      });
    }

    console.log("Email enviado com sucesso:", emailResponse);

    res.json({ 
      success: true, 
      message: "Email enviado com sucesso!",
      id: emailResponse?.data?.id 
    });

  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message || "Erro ao enviar email" 
    });
  }
});

// Rota de health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', server: 'T3RN Email Server', port });
});

app.listen(port, () => {
  console.log(`🚀 Servidor T3RN Email rodando em http://localhost:${port}`);
  console.log(`📧 Endpoint de email: http://localhost:${port}/send-email`);
  console.log(`💚 Health check: http://localhost:${port}/health`);
});
