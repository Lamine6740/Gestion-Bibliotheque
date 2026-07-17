import { useState } from 'react';

export default function Livres({ livres, setLivres }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [titre, setTitre] = useState('');
  const [auteur, setAuteur] = useState('');
  const [categorie, setCategorie] = useState('');
  const [disponible, setDisponible] = useState(true);

  const filtered = livres.filter(
    (l) =>
      l.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.auteur.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleAdd(e) {
    e.preventDefault();
    if (!titre || !auteur) return;
    setLivres([...livres, { id: Date.now(), titre, auteur, categorie, disponible }]);
    setTitre('');
    setAuteur('');
    setCategorie('');
    setDisponible(true);
    setShowForm(false);
  }

  function handleDelete(id) {
    if (confirm('🗑️ Voulez-vous vraiment supprimer ce livre ?')) {
      setLivres(livres.filter((l) => l.id !== id));
    }
  }

  function handleToggleDisponibilite(id) {
    setLivres(livres.map((l) => (l.id === id ? { ...l, disponible: !l.disponible } : l)));
  }

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold font-display">📚 Gestion des Livres</h1>
          <p className="text-stone-500 dark:text-stone-400 mt-1">{livres.length} livre(s) dans la bibliothèque</p>
        </div>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          <i className="fas fa-plus"></i> Ajouter un livre
        </button>
      </div>

      <div className="relative max-w-md w-full mb-6">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
        <input
          type="text"
          placeholder="Rechercher un livre par titre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field"
        />
      </div>

      {showForm && (
        <div className="card mb-6">
          <h3 className="mb-4 font-display text-lg">📖 Nouveau livre</h3>
          <form onSubmit={handleAdd}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Titre du livre"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                required
                className="input-field-plain"
              />
              <input
                type="text"
                placeholder="Auteur"
                value={auteur}
                onChange={(e) => setAuteur(e.target.value)}
                required
                className="input-field-plain"
              />
              <input
                type="text"
                placeholder="Catégorie"
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
                className="input-field-plain"
              />
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={disponible}
                  onChange={(e) => setDisponible(e.target.checked)}
                  className="w-4 h-4 accent-secondary"
                /> Disponible
              </label>
            </div>
            <div className="flex gap-4 mt-4">
              <button type="submit" className="btn-primary"><i className="fas fa-save"></i> Ajouter</button>
              <button type="button" className="btn-outline" onClick={() => setShowForm(false)}>Annuler</button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {filtered.map((l) => (
          <div className="book-card" key={l.id}>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-secondary/10 to-gold/10">
                  <i className="fas fa-book text-secondary text-xl"></i>
                </div>
                <div>
                  <div className="font-semibold">{l.titre}</div>
                  <div className="text-sm text-stone-500">{l.auteur}</div>
                </div>
              </div>
              <span className={`badge ${l.disponible ? 'badge-success' : 'badge-danger'}`}>
                {l.disponible ? '✅ Disponible' : '❌ Indisponible'}
              </span>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2 mt-4">
              <span className="text-xs text-stone-400 bg-stone-100 dark:bg-stone-700 px-2.5 py-1 rounded-md">
                <i className="fas fa-tag"></i> {l.categorie || 'Sans catégorie'}
              </span>
              <div className="flex gap-2">
                <button className="btn-outline btn-sm" onClick={() => handleToggleDisponibilite(l.id)}>
                  {l.disponible ? '📤 Rendre indisponible' : '📥 Rendre disponible'}
                </button>
                <button className="btn-danger btn-sm" onClick={() => handleDelete(l.id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-8 text-stone-500">📭 Aucun livre trouvé</p>
      )}
    </div>
  );
}