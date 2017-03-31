import { Tramite } from './../shared/model/tramite.model';
import { UsuariosService } from './../shared/service/usuarios.service';
import { TurnoService } from './../shared/service/turno.service';
import { Component, OnInit, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
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
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('Certificado en línea')
      .body(`
            <span class="class1">¡Ya no necesitas esperar por tu certificado, puedes obtenerlo en linea!</span>
            <br><span class="class2">¿Quieres descargar tu constancia de afiliaciones obligatorias? </span>`)
      .open();
  }

   public abrirModalResultadoExitoso(): void {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('Éxito')
      .body(`
            La solicitud ha sido agendada`)
      .open();
  }


  public agendar(): void {
    console.log(this.tramiteSeleccionado);
    
    this.tramiteSeleccionado.fechaTurno = this.tramiteSeleccionado.fecha.getTime();
    this.tramiteSeleccionado.numeroTurno = this.turnoService.getTurno();
    
    this.turnoService.insert(this.tramiteSeleccionado);

    this.abrirModalResultadoExitoso();
    this.iniciarDatos();
  }

  private iniciarDatos(): void {
    this.tramiteSeleccionado = new Tramite();
    this.tramiteSeleccionado.tipoTramite = this.tiposTramite[0];
    this.tramiteSeleccionado.usuario = this.usuariosService.usuarioSession;
    this.seleccionarTipoTramite();
  }



}
