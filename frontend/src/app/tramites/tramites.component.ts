import { ModalTramiteLinea } from './modal-tramite-linea';
import { CustomModal } from './modal-conformacion';
import { Tramite } from './../shared/model/tramite.model';
import { UsuariosService } from './../shared/service/usuarios.service';
import { TurnoService } from './../shared/service/turno.service';
import { Component, OnInit, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {

  public tiposTramite = [
    { id: 1, name: "Retiro de cesantias" },
    { id: 2, name: "Constancia de afiliación obligatorias" }
  ];

  public sedes = [
    { id: 1, name: "Suramericana" }
  ];


  public tramiteSeleccionado: Tramite;

  public minDate : Date;
  
  constructor(vcRef: ViewContainerRef,
      public modal: Modal,
      public usuariosService: UsuariosService, 
      public turnoService: TurnoService) {
        this.iniciarDatos();
      this.minDate = new Date();

  }

  ngOnInit() {
  }

  public seleccionarTipoTramite(): void {
    console.log(this.tramiteSeleccionado);
    if (this.tramiteSeleccionado.tipoTramite.id == 2) {
      this.abrirModalTramiteOnline();
    }

  }

  public abrirModalTramiteOnline(): void {
    this.modal.open(ModalTramiteLinea,  overlayConfigFactory({ "turno": "turno" }, BSModalContext));
  }

   public abrirModalResultadoExitoso(turno : string): void {

     this.modal.open(CustomModal,  overlayConfigFactory({ "turno": turno }, BSModalContext));

    // this.modal.alert()
    //   .size('lg')
    //   .showClose(true)
    //   .title('Éxito')
    //   .body(`
    //         La solicitud ha sido agendada
    //         {{tramiteSeleccionado.fecha.getTime()}}
    //         <img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" alt="" title="" />`)
    //   .open();
  }


  public agendar(): void {
    console.log(this.tramiteSeleccionado);
    
    this.tramiteSeleccionado.fechaTurno = this.tramiteSeleccionado.fecha.getTime();
    this.tramiteSeleccionado.numeroTurno = this.turnoService.getTurno();
    this.tramiteSeleccionado.subscription = localStorage.getItem("subscription");
    this.turnoService.insert(this.tramiteSeleccionado);

    this.abrirModalResultadoExitoso(this.tramiteSeleccionado.numeroTurno);
    this.iniciarDatos();
  }

  private iniciarDatos(): void {
    this.tramiteSeleccionado = new Tramite();
    this.tramiteSeleccionado.tipoTramite = this.tiposTramite[0];
    this.tramiteSeleccionado.usuario = this.usuariosService.usuarioSession;
    this.seleccionarTipoTramite();
  }



}
