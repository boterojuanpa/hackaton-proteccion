self.addEventListener('push', function (event) {
    console.log("Notificacion recibida");
    console.log(`Datos: "${JSON.parse(event.data.text()).message}"`);

    const title = JSON.parse(event.data).message;
    const options = {
        body: 'Estas 2 turnos de ser atendido',
        icon: 'assets/images/ico-push.png',
        badge: 'assets/images/ico-push.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
});
