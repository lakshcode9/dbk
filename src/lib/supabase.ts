import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Enhanced environment variable validation
if (!supabaseUrl || !supabaseAnonKey) {
  const errorMessage = 'Critical: Missing Supabase configuration. Application cannot proceed.';
  console.error(errorMessage);
  console.error('Environment:', import.meta.env.MODE);
  console.error('Supabase URL exists:', !!supabaseUrl);
  console.error('Supabase Key exists:', !!supabaseAnonKey);

  // In development, provide helpful debugging information
  if (import.meta.env.DEV) {
    console.error('Development Tips:\n' +
      '1. Ensure .env file exists in project root\n' +
      '2. Verify VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set\n' +
      '3. Restart the development server');
  }

  // In production, check build configuration
  if (import.meta.env.PROD) {
    console.error('Production Tips:\n' +
      '1. Verify environment variables in deployment platform\n' +
      '2. Check .env.production file\n' +
      '3. Rebuild and redeploy if necessary');
  }

  // Throw error to prevent silent failures
  throw new Error(errorMessage);
}

// Initialize Supabase client with validated credentials
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true
  }
});

// Verify Supabase connection
supabase.auth.getSession().then(({ error }) => {
  if (error) {
    console.error('Supabase connection error:', error.message);
    throw error;
  }
  console.log('Supabase connection established successfully');
}).catch(error => {
  console.error('Failed to initialize Supabase client:', error);
  throw error;
});