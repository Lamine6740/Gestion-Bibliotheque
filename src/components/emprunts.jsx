function statutInfo(statut) {
  if (statut === 'en_cours') return { className: 'badge-warning', label: 'En cours' };
  if (statut === 'retard') return { className: 'badge-danger', label: 'En retard' };
  return { className: 'badge-success', label: 'Rendu' };
}

export default function Emprunts({ livres, membres, emprunts }) {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold font-display">📋 Gestion des Emprunts</h1>
        <p className="text-stone-500 dark:text-stone-400 mt-1">Suivi des emprunts de la bibliothèque</p>
      </div>
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {['Membre', 'Livre', "Date d'emprunt", 'Date de retour', 'Statut'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[0.7rem] uppercase tracking-wider text-stone-500 border-b-2 border-stone-200 dark:border-stone-600 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {emprunts.map((e) => {
                const membre = membres.find((m) => m.id === e.membreId);
                const livre = livres.find((l) => l.id === e.livreId);
                const { className, label } = statutInfo(e.statut);
                return (
                  <tr key={e.id} className="hover:bg-secondary/5">
                    <td className="px-4 py-3 border-b border-secondary/5 text-sm">{membre ? `${membre.prenom} ${membre.nom}` : 'Inconnu'}</td>
                    <td className="px-4 py-3 border-b border-secondary/5 text-sm">{livre ? livre.titre : 'Inconnu'}</td>
                    <td className="px-4 py-3 border-b border-secondary/5 text-sm">{e.dateEmprunt}</td>
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