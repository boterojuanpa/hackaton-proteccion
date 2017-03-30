import { UsuariosService } from './share/usuarios.service';
import { ScheduleModule, CalendarModule } from 'primeng/primeng';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { TramitesComponent } from './tramites/tramites.component';

@NgModule({
  declarations: [
    AppComponent,
    TramitesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    ScheduleModule,
    CalendarModule
    
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
