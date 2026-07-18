function statutInfo(statut) {
  if (statut === 'en_cours') return { className: 'badge-warning', label: 'En cours' };
  if (statut === 'retard') return { className: 'badge-danger', label: 'En retard' };
  return { className: 'badge-success', label: 'Rendu' };
}

const STAT_ICON_STYLES = {
  blue: 'bg-gradient-to-br from-slate-700 to-slate-600',
  green: 'bg-gradient-to-br from-green-600 to-green-400',
  yellow: 'bg-gradient-to-br from-amber-500 to-yellow-400',
  red: 'bg-gradient-to-br from-red-700 to-red-500',
};

function StatIcon({ color, icon }) {
  return (
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl ${STAT_ICON_STYLES[color]}`}>
      <i className={`fas ${icon}`}></i>
    </div>
  );
}

export default function Dashboard({ livres, membres, emprunts }) {
  const livresDisponibles = livres.filter((l) => l.disponible).length;
  const empruntsEnCours = emprunts.filter((e) => e.statut === 'en_cours').length;
  const empruntsRetard = emprunts.filter((e) => e.statut === 'retard').length;

  return (
    <div className="animate-fadeIn">
      <div className="relative p-8 bg-gradient-to-br from-secondary/5 to-gold/5 rounded-2xl border border-secondary/5 mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold font-display bg-gradient-to-br from-secondary to-gold bg-clip-text text-transparent">
          📚 Bienvenue dans votre bibliothèque GUISS
        </h1>
        <p className="text-stone-500 dark:text-stone-400 mt-2">
          Gérez vos livres, membres et emprunts en un seul endroit
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="stat-card">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">Total Livres</span>
            <span className="text-3xl font-extrabold mt-1">{livres.length}</span>
            <span className="text-xs text-stone-400 mt-1">{livresDisponibles} disponibles</span>
          </div>
          <StatIcon color="blue" icon="fa-book" />
        </div>
        <div className="stat-card">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">Membres</span>
            <span className="text-3xl font-extrabold mt-1">{membres.length}</span>
            <span className="text-xs text-stone-400 mt-1">Adhérents actifs</span>
          </div>
          <StatIcon color="green" icon="fa-users" />
        </div>
        <div className="stat-card">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">Emprunts en cours</span>
            <span className="text-3xl font-extrabold mt-1">{empruntsEnCours}</span>
            <span className="text-xs text-stone-400 mt-1">Livres empruntés</span>
          </div>
          <StatIcon color="yellow" icon="fa-handshake" />
        </div>
        <div className="stat-card">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">Retards</span>
            <span className="text-3xl font-extrabold mt-1">{empruntsRetard}</span>
            <span className="text-xs text-stone-400 mt-1">Emprunts en retard</span>
          </div>
          <StatIcon color="red" icon="fa-clock" />
        </div>
      </div>

      <div className="card">
        <h3 className="mb-4 font-display text-lg">📋 Derniers emprunts</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left px-4 py-3 text-[0.7rem] uppercase tracking-wider text-stone-500 border-b-2 border-stone-200 dark:border-stone-600 font-semibold">Membre</th>
                <th className="text-left px-4 py-3 text-[0.7rem] uppercase tracking-wider text-stone-500 border-b-2 border-stone-200 dark:border-stone-600 font-semibold">Livre</th>
                <th className="text-left px-4 py-3 text-[0.7rem] uppercase tracking-wider text-stone-500 border-b-2 border-stone-200 dark:border-stone-600 font-semibold">Date retour</th>
                <th className="text-left px-4 py-3 text-[0.7rem] uppercase tracking-wider text-stone-500 border-b-2 border-stone-200 dark:border-stone-600 font-semibold">Statut</th>
              </tr>
            </thead>
            <tbody>
              {emprunts.slice(0, 5).map((e) => {
                const membre = membres.find((m) => m.id === e.membreId);
                const livre = livres.find((l) => l.id === e.livreId);
                const { className, label } = statutInfo(e.statut);
                return (
                  <tr key={e.id} className="hover:bg-secondary/5">
                    <td className="px-4 py-3 border-b border-secondary/5 text-sm">{membre ? `${membre.prenom} ${membre.nom}` : 'Inconnu'}</td>
                    <td className="px-4 py-3 border-b border-secondary/5 text-sm">{livre ? livre.titre : 'Inconnu'}</td>
                    <td className="px-4 py-3 border-b border-secondary/5 text-sm">{e.dateRetour}</td>
                    <td className="px-4 py-3 border-b border-secondary/5 text-sm"><span className={`badge ${className}`}>{label}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
