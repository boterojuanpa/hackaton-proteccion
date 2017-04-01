import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { TurnoService } from "app/shared/service/turno.service";
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html',
  providers: [TurnoService],
  styleUrls: ['./asesor.component.css']
})
export class AsesorComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  turnoService: TurnoService;
  item: any;

  constructor(turnoService: TurnoService) {
    this.turnoService = turnoService;
  }

  ngOnInit() {
  }

  siguienteTurno(): void {
    this.items = this.turnoService.next();
    this.items.forEach(item => {
      if (item[3]) {
        this.turnoService.create(item[3]["subscription"], item[3]["usuario"]["nombre"]).subscribe(response => {

        });
        this.notifyTel(item[3]);
      }
    });
  }

  notifyTel(item): void {
    if (item["celular"]) {
      this.turnoService.notifyTel(item["celular"]).subscribe(response => {
        console.log(response);
      });
    }
  }

}
