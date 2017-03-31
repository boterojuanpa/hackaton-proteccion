import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class TurnoService {

  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
  }

  insert(turno: any): void {
    this.af.database.list('/turnos').push(turno);
  }

  findAll(): any {
    return this.af.database.list('/turnos', {
      query: {
        orderByChild: 'fechaTurno',
      }
    });
  }


}
