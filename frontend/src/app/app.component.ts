import { UsuariosService } from './shared/service/usuarios.service';
import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public urlCurrent : string;

  constructor(public usuariosService : UsuariosService,public router : Router) {


    router.events.subscribe((url:any) => this.urlCurrent = (url.url));
     
    
  }

}
