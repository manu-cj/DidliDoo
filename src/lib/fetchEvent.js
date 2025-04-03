export default async function fetchEvent(road) {
    const url = `http://localhost:3000/${road}`;
try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
        throw new Error('Erreur réseau');
    }
    const data = await reponse.json();
    // return ({
    //     data,
    //     status: reponse.status,
    // });
    return (data);
} catch (error) {
    console.error('Problème :', error);
}
}