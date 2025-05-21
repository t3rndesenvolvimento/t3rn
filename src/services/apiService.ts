
import { supabase, fetchDataFromApi } from '@/integrations/supabase/client';

// Example function to fetch data from a table (replace with your actual tables when created)
export async function fetchExampleData() {
  return fetchDataFromApi(() => 
    supabase
      .from('example_table') // Replace with your actual table name when created
      .select('*')
  );
}

// Function to create a new contact message
export async function createContactMessage(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const { data: result, error } = await supabase
    .from('contact_messages') // Replace with your actual table name when created
    .insert([data])
    .select();

  if (error) {
    console.error('Error saving contact message:', error);
    throw new Error(error.message);
  }

  return result;
}

// Add more API functions as needed
