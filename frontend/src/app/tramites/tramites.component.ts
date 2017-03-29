import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {

  public tiposTramite = [
    { id: 1, name: "Retiro de cesantias" },
    { id: 2, name: "Certificado de difusión" }
  ];

  public tipoTramiteSelect: Number;

  public celular: Number;

  constructor(vcRef: ViewContainerRef, public modal: Modal) {
    this.seleccionarTipoTramite();
    // modal.overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
  }

  public seleccionarTipoTramite(): void {
    if(this.tipoTramiteSelect == 2){
      this.abrirModal();
    }
    
  }

  public abrirModal(): void {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <span defaultOverlayTarget></span>
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
      .open();
  }


}
