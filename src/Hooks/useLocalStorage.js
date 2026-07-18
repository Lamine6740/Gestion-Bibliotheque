import { useState, useEffect } from 'react';

// Ce hook se comporte comme useState, mais sauvegarde automatiquement
// la valeur dans le localStorage à chaque changement, et relit la
// valeur sauvegardée au chargement de la page.
export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Erreur de sauvegarde:', e);
    }
  }, [key, value]);

  return [value, setValue];
}
