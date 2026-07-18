import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('✅ Message envoyé avec succès ! (Simulation)');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold font-display">📧 Contactez-nous</h1>
        <p className="text-stone-500 dark:text-stone-400 mt-1">Une question ? N'hésitez pas à nous contacter</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
        <div className="card">
          <h3 className="mb-6 font-display text-lg">✉️ Envoyez-nous un message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-semibold text-sm mb-1.5">Nom complet</label>
              <div className="relative">
                <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
                <input type="text" placeholder="Votre nom" value={name} onChange={(e) => setName(e.target.value)} required className="input-field" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-semibold text-sm mb-1.5">Email</label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
                <input type="email" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="input-field" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-semibold text-sm mb-1.5">Message</label>
              <textarea
                rows="4"
                placeholder="Votre message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="input-field-plain resize-y"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary btn-full">
              <i className="fas fa-paper-plane"></i> Envoyer
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-4">
          <div className="card">
            <h4 className="font-semibold mb-2"><i className="fas fa-envelope text-secondary"></i> Email</h4>
            <p className="text-stone-600 dark:text-stone-300">contact@bibliothequeGuiss.com</p>
          </div>
          <div className="card">
            <h4 className="font-semibold mb-2"><i className="fas fa-phone text-secondary"></i> Téléphone</h4>
            <p className="text-stone-600 dark:text-stone-300">+221 78 525 98 36 / 76 726 98 72</p>
          </div>
          <div className="card">
            <h4 className="font-semibold mb-2"><i className="fas fa-map-marker-alt text-secondary"></i> Adresse</h4>
            <p className="text-stone-600 dark:text-stone-300">Dakar, Sénégal, Boune</p>
          </div>
        </div>
      </div>
    </div>
  );
}
