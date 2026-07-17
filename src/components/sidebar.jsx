const MAIN_ITEMS = [
  { page: 'dashboard', label: 'Dashboard', icon: 'fa-home' },
  { page: 'livres', label: 'Livres', icon: 'fa-book' },
  { page: 'membres', label: 'Membres', icon: 'fa-users' },
  { page: 'emprunts', label: 'Emprunts', icon: 'fa-handshake' },
];

const ACCOUNT_ITEMS = [
  { page: 'profil', label: 'Profil', icon: 'fa-user-cog' },
  { page: 'parametres', label: 'Paramètres', icon: 'fa-sliders-h' },
  { page: 'contact', label: 'Contact', icon: 'fa-envelope' },
];

export default function Sidebar({ currentPage, onNavigate }) {
  function renderItem(item) {
    return (
      <a
        key={item.page}
        className={`sidebar-item ${currentPage === item.page ? 'sidebar-item-active' : ''}`}
        onClick={() => onNavigate(item.page)}
      >
        <i className={`fas ${item.icon} w-6 text-lg`}></i>
        <span>{item.label}</span>
      </a>
    );
  }

  return (
    <aside className="hidden md:block w-56 lg:w-64 bg-white/90 dark:bg-stone-800/90 backdrop-blur-xl border-r border-secondary/10 p-3 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto">
      <div className="flex flex-col gap-1">
        <div className="text-[0.65rem] uppercase tracking-widest text-stone-400 px-4 py-2 font-semibold">
          Navigation
        </div>
        {MAIN_ITEMS.map(renderItem)}

        <div className="h-px bg-stone-200 dark:bg-stone-600 my-2 mx-4 opacity-30"></div>

        <div className="text-[0.65rem] uppercase tracking-widest text-stone-400 px-4 py-2 font-semibold">
          Compte
        </div>
        {ACCOUNT_ITEMS.map(renderItem)}
      </div>
    </aside>
  );
}