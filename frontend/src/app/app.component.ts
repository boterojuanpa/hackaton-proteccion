import { UsuariosService } from './shared/service/usuarios.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public urlCurrent: string;

  constructor(public usuariosService: UsuariosService, public router: Router) {
    router.events.subscribe((url: any) => this.urlCurrent = (url.url));
  }

  setupPushNotifications() {

    let nav: any = navigator;

    if ('serviceWorker' in navigator) {
      console.log('Service Worker is supported');

      nav.serviceWorker.ready.then(function (reg) {

        reg.pushManager.subscribe({
          userVisibleOnly: true
        }).then(function (sub) {
          console.log('push endpoint:', sub.endpoint);
        }).catch(function (err) {
          console.error(err);
        });
      }).catch(function (error) {
        console.log('Error:', error);
      });
    }

  }

}
