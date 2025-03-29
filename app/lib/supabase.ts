import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Variables d\'environnement Supabase manquantes. Vérifiez NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

// Vérification du format de l'URL
try {
  new URL(supabaseUrl);
} catch (error) {
  throw new Error(`URL Supabase invalide: ${supabaseUrl}`);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  },
});

// Types pour les exemples de fonctionnalités
export type FeatureExample = {
  id: number;
  title: string;
  description: string;
  code: string;
  feature_key: string;
  created_at: string;
};

// Test de connexion
export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('feature_examples')
      .select('count');

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Erreur de connexion Supabase:', error);
    return { success: false, error };
  }
};

export type PresentationSlide = {
  id: number;
  title: string;
  content: string;
  order: number;
  created_at: string;
}; 