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

}
