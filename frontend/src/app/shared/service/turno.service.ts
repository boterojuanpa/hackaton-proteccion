import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class TurnoService {

  af: AngularFire;

  public numeroTurno : number;

  constructor(af: AngularFire) {
    this.af = af;
    this.numeroTurno = 0;
  }

  insert(turno: any): void {
    this.af.database.list('/turnos').push(turno);
  }

  findAll(): any {
    return this.af.database.list('/turnos');
  }

  public getTurno(): string {
    let letras = [ 'C', 'E', 'S', 'G', 'J', 'L', 'A', 'R' ];
    
    return letras[Math.floor((Math.random() * letras.length) + 0)] + "-" + this.numeroTurno++;

   }


}
