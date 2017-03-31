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

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
        
        <qr-code [value]="'http://192.168.164.62:4200/#/turnos/' + context.turno" [size]="150"></qr-code>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" (click) = "close()">Close</button>
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

    onKeyUp(value) {
        this.wrongAnswer = value != 5;
        this.dialog.close();
    }

    close() : void { 

        this.dialog.close();
    }


    // beforeDismiss(): boolean {
    //     return true;
    // }

    // beforeClose(): boolean {
    //     return this.wrongAnswer;
    // }
}
