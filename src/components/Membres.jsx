import { useState } from 'react';

export default function Membres({ membres, setMembres }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const filtered = membres.filter(
    (m) =>
      (m.prenom + ' ' + m.nom).toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleAdd(e) {
    e.preventDefault();
    if (!nom || !prenom || !email) return;
    setMembres([...membres, { id: Date.now(), nom, prenom, email }]);
    setNom('');
    setPrenom('');
    setEmail('');
    setShowForm(false);
  }

  function handleDelete(id) {
    if (confirm('🗑️ Voulez-vous vraiment supprimer ce membre ?')) {
      setMembres(membres.filter((m) => m.id !== id));
    }
  }

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold font-display">👥 Gestion des Membres</h1>
          <p className="text-stone-500 dark:text-stone-400 mt-1">{membres.length} membre(s) inscrit(s)</p>
        </div>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          <i className="fas fa-user-plus"></i> Ajouter un membre
        </button>
      </div>

      <div className="relative max-w-md w-full mb-6">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
        <input
          type="text"
          placeholder="Rechercher un membre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field"
        />
      </div>

      {showForm && (
        <div className="card mb-6">
          <h3 className="mb-4 font-display text-lg">👤 Nouveau membre</h3>
          <form onSubmit={handleAdd}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required className="input-field-plain" />
              <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required className="input-field-plain" />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input-field-plain" />
            </div>
            <div className="flex gap-4 mt-4">
              <button type="submit" className="btn-primary"><i className="fas fa-save"></i> Ajouter</button>
              <button type="button" className="btn-outline" onClick={() => setShowForm(false)}>Annuler</button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
        {filtered.map((m) => (
          <div className="member-card" key={m.id}>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-gold flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
              {m.prenom[0]}{m.nom[0]}
            </div>
            <div>
              <h4 className="font-semibold">{m.prenom} {m.nom}</h4>
              <p className="text-sm text-stone-500"><i className="fas fa-envelope"></i> {m.email}</p>
              <button className="btn-danger btn-sm mt-2" onClick={() => handleDelete(m.id)}>
                <i className="fas fa-trash"></i> Supprimer
