
import { createContactMessage } from './apiService';

// Function to save contact message
export async function saveContactMessage(formData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  try {
    const result = await createContactMessage(formData);
    return {
      success: true,
      message: 'Sua mensagem foi enviada com sucesso!',
      data: result
    };
  } catch (error: any) {
    console.error('Error saving contact message:', error);
    return {
      success: false,
      message: error.message || 'Ocorreu um erro ao enviar sua mensagem.',
      error
    };
  }
}
