import { UsuariosService } from './share/usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public usuariosService : UsuariosService) {
     
    
  }

}
