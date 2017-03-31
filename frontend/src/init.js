
const applicationServerPublicKey = 'BC_lzS1N9w-u5VsJfFlilUQJD45OHEpym-Dlsbt7zJ1_5pSbsvdo_x9f6UEih1ewUKdFWF4LpIJOsYBBZ_W5IwE';
let isSubscribed = false;
let swRegistration = null;

init();

function init() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
            console.log('Service Worker registered');
            swRegistration = registration;
            //unsubscribeUser();
            subscribeUser();
        }).catch(function (err) {
            console.log('Service Worker registration failed: ', err);
        });
    }
}



function subscribeUser() {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
        .then(function (subscription) {
            console.log('User is subscribed:', subscription);
            console.log(JSON.stringify(subscription));
        })
        .catch(function (err) {
            console.log('Failed to subscribe the user: ', err);
            updateBtn();
        });
}

function unsubscribeUser() {
    swRegistration.pushManager.getSubscription()
        .then(function (subscription) {
            if (subscription) {
                return subscription.unsubscribe();
            }
        })
        .catch(function (error) {
            console.log('Error unsubscribing', error);
        })
        .then(function () {
            console.log('User is unsubscribed.');
        });
}

function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}