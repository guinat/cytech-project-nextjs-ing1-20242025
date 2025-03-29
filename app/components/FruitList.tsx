'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Fruit {
  id: number;
  name: string;
  is_active: boolean;
}

export default function FruitList() {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadFruits();
  }, []);

  const loadFruits = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('fruits')
        .select('*')
        .order('name');

      if (error) throw error;
      setFruits(data || []);
    } catch (err) {
      setError('Erreur lors du chargement des fruits.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFruitStatus = async (fruitId: number, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('fruits')
        .update({ is_active: !currentStatus })
        .eq('id', fruitId);

      if (error) throw error;
      
      setFruits(fruits.map(fruit => 
        fruit.id === fruitId 
          ? { ...fruit, is_active: !currentStatus }
          : fruit
      ));
    } catch (err) {
      console.error('Error:', err);
      setError('Erreur lors de la mise à jour du fruit.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-fuchsia-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center text-sm">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {fruits.map((fruit) => (
        <button
          key={fruit.id}
          onClick={() => toggleFruitStatus(fruit.id, fruit.is_active)}
          className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-2 text-sm
            ${fruit.is_active 
              ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {fruit.name}
          <span className={`w-2 h-2 rounded-full
            ${fruit.is_active 
              ? 'bg-emerald-500' 
              : 'bg-gray-400'}`}
          />
        </button>
      ))}
    </div>
  );
} 