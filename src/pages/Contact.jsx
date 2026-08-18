import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }
  return (
    <>
      <div className="page-heading"><div><h1>Contact</h1><p>Une question ? Envoyez-nous un message.</p></div></div>
      <form className="panel contact-form" onSubmit={submit}>
        <input required placeholder="Votre nom" />
        <input required type="email" placeholder="Votre email" />
        <textarea required rows="6" placeholder="Votre message"></textarea>
        <button className="btn" type="submit">Envoyer</button>
        {sent && <p className="success-text">Message envoyé avec succès.</p>}
      </form>
    </>
  );
}