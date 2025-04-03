export const Notifications = (status) => {
    let message = 'On est aussi perdu que toi mon frêrot'; // Default message
    let type = 'error';

    if (status >= 200 && status < 300) {
        message = 'Tout est bon mon frerot';
        type = 'success'; 
    }

    switch (status) {
        case 400:
            message = 'Mauvaise requête mon frerot';
            break;
        case 401:
            message = 'Non autorisé mon frerot';
            break;
        case 403:
            message = 'Tu ne peux pas mon shrab';
            break;
        case 404:
            message = 'On trouve pas la destination frangin';
            break;
        case 408:
            message = 'Ta requête est peut-être perdue';
            break;
        case 429:
            message = 'Calme-toi avec tes requêtes, on a pas que ça à foutre';
            break;
        case 500:
            message = 'Le serveur a pété un câble, reviens plus tard !';
            break;
        case 502:
            message = 'La passerelle a pris un RTT, reviens plus tard !';
            break;
        case 503:
            message = 'Le service est parti en pause café, patience !';
            break;
        case 504:
            message = 'La passerelle est coincée dans les bouchons, attends un peu !';
            break;
        default:
            // Default case already handled by initial values
            break;
    }

    const app = document.querySelector('#app');
    if (!app) {
        console.error('Element with id "app" not found.');
        return;
    }

    const notif = document.createElement('div');
    notif.classList.add('notification', type);

    const notifContent = document.createElement('div');
    notifContent.classList.add('notification-content');

    const notifMessage = document.createElement('p');
    notifMessage.classList.add('notif-message');
    notifMessage.innerText = message;

    const progressDiv = document.createElement('div');
    progressDiv.classList.add('progress');

    notifContent.appendChild(notifMessage);
    notif.appendChild(notifContent);
    notif.appendChild(progressDiv);

    app.insertBefore(notif, app.firstChild);

    setTimeout(() => {
        notif.style.animationName = "fadeOut"
        setTimeout(()=> {
            notif.remove();
        }, 800)
    }, 5000);
};
