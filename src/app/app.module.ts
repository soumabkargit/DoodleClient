import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AllergieService} from './services/allergie.service';
import {AllergieComponent} from './allergie/allergie.component';
import {HttpClientModule} from '@angular/common/http';
import {AllergieDetailComponent} from './allergie-detail/allergie-detail.component';
import {AllergieCreateComponent} from './allergie-create/allergie-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllergieComponent,
    AllergieDetailComponent,
    AllergieCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AllergieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
