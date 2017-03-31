import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CustomModalContext extends BSModalContext {
    public num1: number;
    public num2: number;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
    selector: 'modal-content',
    styles: [`
        .custom-modal-container {
            padding: 15px;
        }

        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
  //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ template: `

  <div class="modal-content modal-content-customized">
      <div class="modal-header modal-header-customized">
        <button type="button" (click) = "close()" class="close" data-dismiss="modal">&times;</button>
        <span class="modal-title modal-title-customized">Turno agendado</span>
      </div>
      <div class="modal-body modal-body-customized">
        <div class="modal-general-text">¡Haz separado tu turno!<br><span class="modal-general-text2">scanea el QR, que tambien llegara a tu correo y enterate en tiempo real del estado de tu turno</span></div>
        <span class="clearfix"></span>
        <br> 
        <qr-code [value]="'http://192.168.164.62:4200/#/turnos/' + context.turno" [size]="150"></qr-code>
      </div>
      <div class="modal-footer modal-footer-customized">
        <button type="button" class="btn btn-link btn-link-primary" data-dismiss="modal" (click) = "close()">Aceptar</button>
      </div>
    </div>`

   
})
export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
    context: CustomModalContext;

    public wrongAnswer: boolean;

    constructor(public dialog: DialogRef<CustomModalContext>) {
        this.context = dialog.context;
        this.wrongAnswer = true;
        dialog.setCloseGuard(this);
    }

    close() : void { 
        this.dialog.close();
    }

}
