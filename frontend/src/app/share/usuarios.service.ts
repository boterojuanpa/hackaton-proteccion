import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  private usuarios: Array<Usuario> = new Array();

  public usuarioSession : Usuario;

  constructor() {
    this.usuarios.push(new Usuario("Juan" , 12312315234324));
    this.usuarios.push(new Usuario("Pedro" , 123121231235412));
    this.usuarios.push(new Usuario("Carlos" , 62432341));

    this.usuarioSession = this.usuarios[Math.floor((Math.random() * this.usuarios.length) + 0)];
   }

}
