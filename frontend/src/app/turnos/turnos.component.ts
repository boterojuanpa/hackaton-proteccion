import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { TurnoService } from "app/shared/service/turno.service";


@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  providers: [TurnoService],
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  turnoService: TurnoService;

  constructor(turnoService: TurnoService) {
    this.turnoService = turnoService;
  }

  ngOnInit() {
    this.items = this.turnoService.findAll();
  }

  calculateDate(date: number): number {
    var currentTime = new Date().getTime();
    console.log(currentTime);
    //console.log(date - currentTime);
    var h = (date - currentTime)/1000;
    return parseInt((h/60).toString());
  }

}
