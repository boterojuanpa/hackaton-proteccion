import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { TurnoService } from 'app/shared/service/turno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-qr',
  templateUrl: './consulta-qr.component.html',
  styleUrls: ['./consulta-qr.component.css']
})
export class ConsultaQrComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(public turnosService: TurnoService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.items = turnosService.findByTurno(params['numeroTurno']);
    });

  }

  ngOnInit() {
  }

  calculateDate(date: number): number {
    var currentTime = new Date().getTime();
    console.log(currentTime);
    //console.log(date - currentTime);
    var h = (date - currentTime)/1000;
    return parseInt((h/60).toString());
  }

}
