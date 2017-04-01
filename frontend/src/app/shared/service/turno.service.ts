import { Tramite } from './../model/tramite.model';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class TurnoService {

  af: AngularFire;

  public numeroTurno: number;
  private heroesUrl = 'api/heroes';

  constructor(private http: Http, af: AngularFire) {
    this.af = af;
    this.numeroTurno = 0;
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

  next(): any {
    return this.af.database.list('/turnos', {
      query: {
        orderByChild: 'fechaTurno',
        limitToFirst: 5
      }
    });
  }

  public findByTurno(turno: string): any {
    return this.af.database.list('/turnos', {
      query: {
        orderByChild: 'numeroTurno',
        equalTo: turno,
        limitToFirst: 1
      }
    });

  }

  public getTurno(): string {
    let letras = ['C', 'E', 'S', 'G', 'J', 'L', 'A', 'R'];

    return letras[Math.floor((Math.random() * letras.length) + 0)] + "-" + this.numeroTurno++;
  }


  create(push, nombre): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var params = {
      push: JSON.parse(push),
      nombre: nombre
    }
    let body = params;
    console.log(body);
    return this.http.post('http://192.168.164.182:3000/send', body, headers).map((res: Response) => res);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }




}
