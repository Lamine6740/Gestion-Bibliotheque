export default function Parametres({ darkMode, onToggleTheme }) {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold font-display">⚙️ Paramètres</h1>
        <p className="text-stone-500 dark:text-stone-400 mt-1">Personnalisez votre expérience</p>
      </div>
      <div className="grid gap-4 max-w-xl">
        <div className="card flex justify-between items-center">
          <div className="flex items-center gap-3">
            <i className="fas fa-palette text-secondary text-xl"></i>
            <div>
              <h4 className="font-semibold">Apparence</h4>
              <p className="text-sm text-stone-500">Mode sombre</p>
            </div>
          </div>
          <button className="btn-primary" onClick={onToggleTheme}>
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            {darkMode ? ' ☀️ Clair' : ' 🌙 Sombre'}
          </button>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <i className="fas fa-language text-green-600 text-xl"></i>
            <h4 className="font-semibold">Langue</h4>
          </div>
          <select className="input-field-plain">
            <option value="fr">🇫🇷 Français</option>
            <option value="en">🇬🇧 English</option>
            <option value="es">🇪🇸 Español</option>
          </select>
        </div>
      </div>
    </div>
  );
}
