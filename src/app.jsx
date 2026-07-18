import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { initialLivres, initialMembres, initialEmprunts } from './data/initialData.js';

import BgBooks from './components/BgBooks.jsx';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';

import Dashboard from './components/pages/Dashboard.jsx';
import Livres from './components/pages/Livres.jsx';
import Membres from './components/pages/Membres.jsx';
import Emprunts from './components/pages/Emprunts.jsx';
import Profil from './components/pages/Profil.jsx';
import Parametres from './components/pages/Parametres.jsx';
import Contact from './components/pages/Contact.jsx';

export default function App() {
  // ===== AUTHENTIFICATION (persistée dans le localStorage) =====
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage('isAuthenticated', false);
  const [currentUser, setCurrentUser] = useLocalStorage('currentUser', null);

  // ===== NAVIGATION =====
  const [currentPage, setCurrentPage] = useState('dashboard');

  // ===== THEME =====
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    // Tailwind (darkMode: 'class') applique les variantes dark: quand
    // la classe "dark" est présente sur <html>
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // ===== DONNÉES (persistées dans le localStorage) =====
  const [livres, setLivres] = useLocalStorage('livres', initialLivres);
  const [membres, setMembres] = useLocalStorage('membres', initialMembres);
  const [emprunts] = useLocalStorage('emprunts', initialEmprunts);

  function handleLogin(user) {
    setCurrentUser(user);
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  }

  function handleLogout() {
    setIsAuthenticated(false);
    setCurrentUser(null);
  }

  // ===== PAGE NON CONNECTÉE =====
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // ===== PAGE CONNECTÉE =====
  function renderPage() {
    switch (currentPage) {
      case 'dashboard': return <Dashboard livres={livres} membres={membres} emprunts={emprunts} />;
      case 'livres': return <Livres livres={livres} setLivres={setLivres} />;
      case 'membres': return <Membres membres={membres} setMembres={setMembres} />;
      case 'emprunts': return <Emprunts livres={livres} membres={membres} emprunts={emprunts} />;
      case 'profil': return <Profil user={currentUser} />;
      case 'parametres': return <Parametres darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />;
      case 'contact': return <Contact />;
      default: return <Dashboard livres={livres} membres={membres} emprunts={emprunts} />;
    }
  }

  return (
    <>
      <BgBooks />
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode(!darkMode)}
          onLogout={handleLogout}
        />
        <div className="flex flex-1 relative z-10">
          <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
          <main className="flex-1 p-4 md:p-8 overflow-y-auto relative max-w-full">{renderPage()}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}