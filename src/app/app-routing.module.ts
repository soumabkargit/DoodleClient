import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllergieComponent} from './allergie/allergie.component';
import {AllergieCreateComponent} from './allergie-create/allergie-create.component';


const routes: Routes = [
  { path: '', component: AllergieComponent },
  { path: 'allergies/create', component: AllergieCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
