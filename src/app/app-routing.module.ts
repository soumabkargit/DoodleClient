import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllergieComponent} from './allergie/allergie.component';
import {AllergieCreateComponent} from './allergie-create/allergie-create.component';
import {AllergieUpdateComponent} from './allergie-update/allergie-update.component';
import {AllergieDetailComponent} from './allergie-detail/allergie-detail.component';


const routes: Routes = [
  { path: '', component: AllergieComponent },
  { path: 'allergies/create', component: AllergieCreateComponent },
  { path: 'allergies/update/:idAllergie', component: AllergieUpdateComponent },
  { path: 'allergies/detail/:idAllergie', component: AllergieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
