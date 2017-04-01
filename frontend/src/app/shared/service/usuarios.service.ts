import { Usuario } from './../model/usuario.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  private usuarios: Array<Usuario> = new Array();

  public usuarioSession : Usuario;

  constructor() {
    this.usuarios.push(new Usuario("Mateo Botero" , 1013124123));
    this.usuarios.push(new Usuario("Heriberto Jaramillo" , 62432341));

    this.usuarioSession = this.usuarios[Math.floor((Math.random() * this.usuarios.length) + 0)];
   }

}
