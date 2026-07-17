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
];

function generateShelf() {
  const rows = [];
  for (let row = 0; row < 3; row++) {
    const books = [];
    for (let i = 0; i < 20; i++) {
      books.push({
        height: HEIGHTS[Math.floor(Math.random() * HEIGHTS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        width: 6 + Math.random() * 6,
      });
    }
    rows.push(books);
  }
  return rows;
}

export default function BgBooks({ withShelf = true }) {
  const shelfRows = useMemo(() => generateShelf(), []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none
                 bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300
                 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900"
    >
