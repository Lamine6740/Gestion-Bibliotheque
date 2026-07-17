import { useMemo } from 'react';

const EMOJIS = ['📚', '📖', '📕', '📗', '📘', '📙', '📓', '📔'];
const COLORS = ['#8B4513', '#2C3E50', '#A0522D', '#1a252f', '#6B3A2A', '#34495E', '#5D4037', '#2C3E50', '#795548', '#1a252f'];
const HEIGHTS = [60, 80, 45, 90, 55, 70, 85, 50, 75, 65, 95, 40];

// Position + délai + rotation de chaque livre flottant (repris du CSS original)
const FLOATING_POSITIONS = [
  { top: '10%', left: '5%', delay: '0s', rotation: '-15deg' },
  { top: '20%', right: '8%', delay: '3s', rotation: '10deg' },
  { top: '50%', left: '3%', delay: '6s', rotation: '5deg' },
  { top: '60%', right: '5%', delay: '9s', rotation: '-8deg' },
  { top: '30%', left: '50%', delay: '12s', rotation: '12deg' },
  { top: '70%', left: '20%', delay: '15s', rotation: '-5deg' },
  { top: '15%', left: '75%', delay: '2s', rotation: '20deg' },
  { top: '45%', left: '85%', delay: '8s', rotation: '-12deg' },
