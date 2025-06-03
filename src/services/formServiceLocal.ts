
// Versão local do formService para testes com servidor Node.js
const LOCAL_SERVER_URL = 'http://localhost:3001';

// Function to save contact message and send email
export async function saveContactMessage(formData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  try {
    console.log('Enviando mensagem de contato para servidor local...');
    
    const response = await fetch(`${LOCAL_SERVER_URL}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Erro ao enviar mensagem');
    }
    
    return {
      success: true,
      message: 'Sua mensagem foi enviada com sucesso!',
      data: result
    };
  } catch (error: any) {
    console.error('Erro ao enviar mensagem de contato:', error);
    return {
      success: false,
      message: error.message || 'Ocorreu um erro ao enviar sua mensagem.',
      error
    };
  }
}

// Function to save newsletter subscription and send email
export async function saveNewsletter(email: string) {
  try {
    console.log('Enviando inscrição de newsletter para servidor local...');
    
    const response = await fetch(`${LOCAL_SERVER_URL}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'newsletter',
        email: email
      })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Erro ao processar inscrição');
    }
    
    return {
      success: true,
      message: 'Inscrição realizada com sucesso! Verifique seu email para confirmação.',
      data: result
    };
  } catch (error: any) {
    console.error('Erro ao processar inscrição de newsletter:', error);
    return {
      success: false,
      message: error.message || 'Ocorreu um erro ao processar sua inscrição.',
      error
    };
  }
}
