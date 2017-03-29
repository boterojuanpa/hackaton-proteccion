import { TramitesComponent } from './tramites/tramites.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', 
    redirectTo: '/tramites', 
    pathMatch: 'full' 
  },
  {
    path: 'tramites', 
    component: TramitesComponent
  },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
