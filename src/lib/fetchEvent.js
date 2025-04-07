export default async function fetchEvent(road) {// Fonction asynchrone pour récupérer des données d'événement depuis une API locale
    const url = `http://localhost:3000/${road}`;  // Construire l'URL en utilisant le chemin fourni
try {
    const reponse = await fetch(url);      // Effectuer une requête fetch vers l'URL construite
    if (!reponse.ok) {       // Vérifier si la réponse est OK (statut HTTP 200-299)
        throw new Error('Erreur réseau');         // Si la réponse n'est pas OK, lancer une erreur
    }
    const data = await reponse.json();        // Convertir la réponse en JSON
    return (data);        // Retourner les données JSON
} catch (error) {      // En cas d'erreur, afficher un message d'erreur dans la console
    console.error('Problème :', error);
}
}