export default function Profil({ user }) {
  const { prenom = 'Utilisateur', email = 'non-defini@email.com', role = 'utilisateur' } = user || {};

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold font-display">👤 Profil utilisateur</h1>
        <p className="text-stone-500 dark:text-stone-400 mt-1">Gérez vos informations personnelles</p>
      </div>
      <div className="card max-w-xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-gold flex items-center justify-center text-4xl font-bold text-white">
            {prenom[0]}
          </div>
          <div>
            <h2 className="text-2xl font-display">{prenom}</h2>
            <p className="text-stone-500 capitalize">{role}</p>
          </div>
        </div>
        <div className="border-t border-stone-200 dark:border-stone-600 pt-6">
          <div className="flex items-center gap-4 py-3 border-b border-stone-100 dark:border-stone-700">
            <i className="fas fa-envelope text-stone-400 w-5"></i>
            <div>
              <p className="text-xs text-stone-500">Email</p>
              <p className="font-medium">{email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-3">
            <i className="fas fa-user-tag text-stone-400 w-5"></i>
            <div>
              <p className="text-xs text-stone-500">Rôle</p>
              <p className="font-medium capitalize">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
