
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule}from'@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InterceptorService } from './Service/interceptor.service';
import { SearchMeteoComponent } from './search-meteo/search-meteo.component';
import { ForecastComponent } from './forecast/forecast.component';
import { NavbarVuotaComponent } from './navbar-vuota/navbar-vuota.component';
import { CardMeteoComponent } from './card-meteo/card-meteo.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchMeteoComponent,
    ForecastComponent,
    NavbarVuotaComponent,
    CardMeteoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule { }
