import { UsuariosService } from './../share/usuarios.service';
import { Tramite } from './../share/tramite.model';
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

  public sedes = [
    { id: 1, name: "Bello" },
    { id: 2, name: "Itaguí" }
  ];


  public tramiteSeleccionado: Tramite;

  events: any[];


  constructor(vcRef: ViewContainerRef, public modal: Modal, public usuariosService : UsuariosService) {
    this.tramiteSeleccionado = new Tramite();
    this.tramiteSeleccionado.tipoTramite = this.tiposTramite[0];
    this.tramiteSeleccionado.nombreUsuario = usuariosService.usuarioSession.nombre;
    this.seleccionarTipoTramite();
   
  }

  ngOnInit() {
  }

  public seleccionarTipoTramite(): void {
    console.log(this.tramiteSeleccionado);
    if (this.tramiteSeleccionado.tipoTramite.id == 2) {
      this.abrirModal();
    }

  }

  public abrirModal(): void {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('Descargar certificado en línea')
      .body(`
            Para descargar el certificado dar clic `)
      .open();
  }


  public agendar(): void {
    console.log(this.tramiteSeleccionado)
   }

}
