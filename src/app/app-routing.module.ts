import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { SearchMeteoComponent } from './search-meteo/search-meteo.component';

const routes: Routes = [
  {path:'', component:SearchMeteoComponent},
  {path:'forecast',component:ForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
