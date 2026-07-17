// Données de démonstration utilisées la première fois que l'app se lance
// (ensuite, tout est lu/écrit dans le localStorage du navigateur)

export const initialLivres = [
  { id: 1, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", categorie: "Littérature", disponible: true },
  { id: 2, titre: "1984", auteur: "George Orwell", categorie: "Science-fiction", disponible: false },
  { id: 3, titre: "L'Étranger", auteur: "Albert Camus", categorie: "Philosophie", disponible: true },
  { id: 4, titre: "Le Rouge et le Noir", auteur: "Stendhal", categorie: "Roman", disponible: true },
  { id: 5, titre: "Madame Bovary", auteur: "Gustave Flaubert", categorie: "Roman", disponible: false },
  { id: 6, titre: "Les Misérables", auteur: "Victor Hugo", categorie: "Roman historique", disponible: true },
  { id: 7, titre: "Le Grand Meaulnes", auteur: "Alain-Fournier", categorie: "Roman", disponible: true },
  { id: 8, titre: "Voyage au bout de la nuit", auteur: "Louis-Ferdinand Céline", categorie: "Roman", disponible: false },
];

export const initialMembres = [
  { id: 1, nom: "Dupont", prenom: "Jean", email: "jean.dupont@email.com" },
  { id: 2, nom: "Martin", prenom: "Marie", email: "marie.martin@email.com" },
  { id: 3, nom: "Bernard", prenom: "Pierre", email: "pierre.bernard@email.com" },
  { id: 4, nom: "Petit", prenom: "Sophie", email: "sophie.petit@email.com" },
  { id: 5, nom: "Durand", prenom: "Luc", email: "luc.durand@email.com" },
];

export const initialEmprunts = [
  { id: 1, membreId: 1, livreId: 2, dateEmprunt: "2024-01-15", dateRetour: "2024-02-15", statut: "en_cours" },
  { id: 2, membreId: 2, livreId: 5, dateEmprunt: "2024-01-10", dateRetour: "2024-02-10", statut: "retard" },
  { id: 3, membreId: 3, livreId: 1, dateEmprunt: "2024-01-05", dateRetour: "2024-02-05", statut: "rendu" },
  { id: 4, membreId: 4, livreId: 3, dateEmprunt: "2024-01-20", dateRetour: "2024-02-20", statut: "en_cours" },
  { id: 5, membreId: 5, livreId: 7, dateEmprunt: "2024-01-12", dateRetour: "2024-02-12", statut: "en_cours" },
];