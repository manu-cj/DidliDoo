export default async function fetchEvent(road) {
    const url = `http://localhost:3000/${road}`;
try {
    const reponse = await fetch(url);
    console.log(reponse);
    if (!reponse.ok) {
        throw new Error('Erreur réseau');
    }
    const data = await reponse.json();
    console.log(data);
    return (data);
} catch (error) {
    console.error('Problème :', error);
}
}