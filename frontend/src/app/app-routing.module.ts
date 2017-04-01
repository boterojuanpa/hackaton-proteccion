import { ConsultaQrComponent } from './consulta-qr/consulta-qr.component';
import { TramitesComponent } from './tramites/tramites.component';
import { TurnosComponent } from './turnos/turnos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AsesorComponent } from './asesor/asesor.component';

const routes: Routes = [
  { path: '', 
    redirectTo: '/tramites', 
    pathMatch: 'full' 
  },
  {
    path: 'tramites', 
    component: TramitesComponent
  },{
    path: 'turnos', 
    component: TurnosComponent
  },
  {
    path: 'turnos/:numeroTurno', 
    component: ConsultaQrComponent
  },
  {
    path: 'asesor', 
    component: AsesorComponent
  }


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
