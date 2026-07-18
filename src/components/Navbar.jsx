const LINKS = [
  { page: 'dashboard', label: 'Dashboard', icon: 'fa-chart-pie' },
  { page: 'livres', label: 'Livres', icon: 'fa-book' },
  { page: 'membres', label: 'Membres', icon: 'fa-users' },
  { page: 'emprunts', label: 'Emprunts', icon: 'fa-handshake' },
  { page: 'profil', label: 'Profil', icon: 'fa-user-cog' },
  { page: 'parametres', label: 'Paramètres', icon: 'fa-sliders-h' },
];

export default function Navbar({ currentPage, onNavigate, darkMode, onToggleTheme, onLogout }) {
  return (
    <nav className="sticky top-0 z-40 h-[72px] flex items-center px-4 md:px-8 bg-white/90 dark:bg-stone-800/90 backdrop-blur-xl border-b border-secondary/10 shadow-lg">
      <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('dashboard')}>
          <div className="p-2 rounded-xl bg-gradient-to-br from-secondary to-gold shadow-lg shadow-secondary/30 transition-transform group-hover:scale-110 group-hover:-rotate-6">
            <i className="fas fa-book-open text-white text-2xl"></i>
          </div>
          <span className="hidden sm:inline text-2xl font-extrabold font-display bg-gradient-to-br from-secondary to-gold bg-clip-text text-transparent tracking-tight">
            Bibliothèque
          </span>
        </div>

        <div className="hidden md:flex gap-2 items-center">
          {LINKS.map((link) => (
            <a
              key={link.page}
              className={`nav-link ${currentPage === link.page ? 'nav-link-active' : ''}`}
              onClick={() => onNavigate(link.page)}
            >
              <i className={`fas ${link.icon}`}></i> {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-600 hover:rotate-[20deg] transition-all duration-300"
            onClick={onToggleTheme}
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button className="btn-danger" onClick={onLogout}>
            <i className="fas fa-sign-out-alt"></i> <span className="hidden sm:inline">Déconnexion</span>
          </button>
        </div>
      </div>
    </nav>
  );
}