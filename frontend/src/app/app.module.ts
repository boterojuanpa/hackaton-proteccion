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
import { OrderPipe } from "app/shared/pipe/order.pipe";


@NgModule({
  declarations: [
    AppComponent,
    TramitesComponent,
    TurnosComponent,
    OrderPipe
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
    AngularFireModule.initializeApp(FirebaseConfig)

  ],
  providers: [UsuariosService, TurnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
