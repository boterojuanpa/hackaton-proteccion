import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
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
  itemFire: FirebaseObjectObservable<any>;
  turnoService: TurnoService;
  item: any;

  constructor(turnoService: TurnoService) {
    this.turnoService = turnoService;
  }

  ngOnInit() {
  }

  siguienteTurno(): void {
    this.items = this.turnoService.next();
    var first;
    this.items.forEach(item => {
      if (item[2]) {
        this.turnoService.create(item[2]["subscription"], item[2]["usuario"]["nombre"]).subscribe(response => {

        });
        this.notifyTel(item[2]);
      }
    });
    // this.deleteFirst(item);
  }

  deleteFirst(item): void {
    if (item[0]) {
      this.itemFire = item[0];
      this.turnoService.delete(this.itemFire);
    }
  }

  notifyTel(item): void {
    if (item["celular"]) {
      this.turnoService.notifyTel(item["celular"]).subscribe(response => {
        console.log(response);
      });
    }
  }

}
