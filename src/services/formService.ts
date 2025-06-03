
import { createContactMessage } from './apiService';
import { supabase } from '@/integrations/supabase/client';

// Function to save contact message and send email
export async function saveContactMessage(formData: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  try {
    // Save to database
    const result = await createContactMessage(formData);
    
    // Send email notification
    const emailResult = await supabase.functions.invoke('send-email', {
      body: {
        type: 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      }
    });

    if (emailResult.error) {
      console.error('Error sending email:', emailResult.error);
    } else {
      console.log('Email sent successfully:', emailResult.data);
    }
    
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

// Function to save newsletter subscription and send email
export async function saveNewsletter(email: string) {
  try {
    // Check if email already exists in the newsletter_subscribers table
    const { data: existingSubscriber, error: queryError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', email)
      .maybeSingle();
    
    if (queryError) throw queryError;
    
    if (existingSubscriber) {
      return {
        success: false,
        message: 'Este e-mail já está inscrito em nossa newsletter.'
      };
    }
    
    // Save new subscriber
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email })
      .select();
      
    if (error) {
      throw error;
    }
    
    // Send welcome email
    const emailResult = await supabase.functions.invoke('send-email', {
      body: {
        type: 'newsletter',
        email: email
      }
    });

    if (emailResult.error) {
      console.error('Error sending newsletter email:', emailResult.error);
    } else {
      console.log('Newsletter email sent successfully:', emailResult.data);
    }
    
    return {
      success: true,
      message: 'Inscrição realizada com sucesso! Verifique seu email para confirmação.',
      data
    };
  } catch (error: any) {
    console.error('Error saving newsletter subscription:', error);
    return {
      success: false,
      message: error.message || 'Ocorreu um erro ao processar sua inscrição.',
      error
    };
  }
}
