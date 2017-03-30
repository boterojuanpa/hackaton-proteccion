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

@NgModule({
  declarations: [
    AppComponent,
    TramitesComponent,
    TurnosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
