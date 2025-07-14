'use client';

import { useState, useEffect } from 'react';

export default function GemCounter() {
  const [gems, setGems] = useState(0);

  useEffect(() => {
    const savedGems = localStorage.getItem('chemquest-gems');
    if (savedGems) {
      setGems(parseInt(savedGems));
    }

    // Listen for storage changes to update gem count across tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'chemquest-gems') {
        setGems(parseInt(e.newValue || '0'));
      }
    };

    // Listen for custom gem update events from the same tab
    const handleGemUpdate = (e: CustomEvent) => {
      if (e.detail && typeof e.detail.gems === 'number') {
        setGems(e.detail.gems);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('gemUpdate', handleGemUpdate as EventListener);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('gemUpdate', handleGemUpdate as EventListener);
    };
  }, []);

  return (
    <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-1 rounded-full">
      <span className="text-lg">💎</span>
      <span className="font-bold text-yellow-800 text-sm">{gems}</span>
    </div>
  );
} 