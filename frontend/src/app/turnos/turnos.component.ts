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
  turno = {
    nombre: "Carlos",
    turno: "1B",
    hora: "30"
  };
  turnoService: TurnoService;

  constructor(turnoService: TurnoService) {
    this.turnoService = turnoService;
  }

  ngOnInit() {
    this.items = this.turnoService.findAll();
    //this.turnoService.insert(this.turno);
  }

}
