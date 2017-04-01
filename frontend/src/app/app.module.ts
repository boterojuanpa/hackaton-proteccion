import { ModalTramiteLinea } from './tramites/modal-tramite-linea';
import { CustomModal } from './tramites/modal-conformacion';
import { TurnoService } from 'app/shared/service/turno.service';
import { UsuariosService } from './shared/service/usuarios.service';
import { ScheduleModule, CalendarModule } from 'primeng/primeng';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { TramitesComponent } from './tramites/tramites.component';
import { TurnosComponent } from './turnos/turnos.component';
import { FirebaseConfig } from "firebaseconfig";

import { QRCodeModule } from 'angular2-qrcode';

import { ConsultaQrComponent } from './consulta-qr/consulta-qr.component';
import { AsesorComponent } from './asesor/asesor.component';

@NgModule({
  declarations: [
    AppComponent,
    TramitesComponent,
    TurnosComponent,
    ConsultaQrComponent,
    CustomModal,  
    ModalTramiteLinea, AsesorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    ScheduleModule,
    CalendarModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    QRCodeModule 
  

  ],
  providers: [UsuariosService, TurnoService],
  bootstrap: [AppComponent],
  entryComponents: [ CustomModal, ModalTramiteLinea ]
})
export class AppModule {  
}
