import { useState } from 'react';
import BgBooks from './BgBooks.jsx';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    let user;
    if (email === 'admin@bibliotheque.com' && password === 'admin123') {
      user = { prenom: 'Admin', email, role: 'administrateur' };
    } else if (email && password.length >= 3) {
      user = { prenom: email.split('@')[0] || 'Utilisateur', email, role: 'utilisateur' };
    } else {
      setError('Identifiants invalides. Veuillez réessayer.');
      return;
    }

    setError('');
    onLogin(user);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900">
      <div className="absolute inset-0 opacity-30">
        <BgBooks withShelf={false} />
      </div>
      <div className="relative z-10 w-full max-w-md p-6">
        <div className="bg-white/90 dark:bg-stone-800/90 backdrop-blur-2xl rounded-2xl p-10 shadow-2xl border border-secondary/10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-gold flex items-center justify-center shadow-lg shadow-secondary/30 animate-pulseIcon">
              <i className="fas fa-book-open text-4xl text-white"></i>
            </div>
            <h2 className="text-2xl font-extrabold font-display">Bibliothèque</h2>
            <p className="text-stone-500 dark:text-stone-400 mt-1">Connectez-vous à votre espace</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="loginEmail" className="block font-semibold text-sm text-stone-700 dark:text-stone-200 mb-1.5">
                Adresse email
              </label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
                <input
                  type="email"
                  id="loginEmail"
                  placeholder="exemple@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="loginPassword" className="block font-semibold text-sm text-stone-700 dark:text-stone-200 mb-1.5">
                Mot de passe
              </label>
              <div className="relative">
                <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
                <input
                  type="password"
                  id="loginPassword"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
            </div>
            {error && (
              <div className="bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl border-l-4 border-red-500 mb-4 text-sm">
                {error}
              </div>
            )}
            <button type="submit" className="btn-primary btn-full">
              <i className="fas fa-sign-in-alt"></i> Se connecter
            </button>
            <div className="text-center mt-6 text-xs text-stone-400">
              <p className="text-stone-500 dark:text-stone-400">🔑 Demo: admin@bibliotheque.com / admin123</p>
              <p>Ou entrez n'importe quel email/mot de passe (min 3 caractères)</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}