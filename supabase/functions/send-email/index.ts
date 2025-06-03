
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  type: 'contact' | 'newsletter';
  name?: string;
  email: string;
  phone?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, name, email, phone, message }: ContactEmailRequest = await req.json();
    
    console.log('Processing email request:', { type, email, name });

    let emailResponse;

    if (type === 'contact') {
      // Send contact form email
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

      // Send confirmation email to user
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
      // Send newsletter confirmation email
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

      // Notify admin about new newsletter subscription
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

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Email enviado com sucesso!",
      id: emailResponse?.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Erro ao enviar email" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
