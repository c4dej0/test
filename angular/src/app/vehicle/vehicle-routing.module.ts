import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'vehicle', redirectTo: 'vehicle/index', pathMatch: 'full'},
  { path: 'vehicle/index', component: IndexComponent },
  { path: 'vehicle/create/:idVehicle', component: CreateComponent },
  { path: 'vehicle/edit/:idVehicle', component: EditComponent } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
