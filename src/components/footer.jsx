export default function Footer() {
  return (
    <footer className="bg-white/90 dark:bg-stone-800/90 backdrop-blur-xl border-t border-secondary/10 px-4 md:px-8 py-4 mt-auto relative z-10">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-stone-500 dark:text-stone-400 text-sm text-center">
        <p>© 2024 Bibliothèque - Tous droits réservés</p>
        <p className="flex items-center gap-1">
          Fait avec <i className="fas fa-heart text-accent animate-pulseHeart"></i> par Lamine, Modygham, Ibrahima & Mbakhé
        </p>
      </div>
    </footer>
  );
}