import { Component, Input, OnInit } from '@angular/core';
import { ApiMeteoService } from '../Service/api-meteo.service';
import { SpinnerService } from '../Service/spinner.service';

@Component({
  selector: 'app-search-meteo',
  templateUrl: './search-meteo.component.html',
  styleUrls: ['./search-meteo.component.scss'],

})
export class SearchMeteoComponent implements OnInit {
  message: any[];
  cardParent: any[];
  POST: any[];
  POST2: any[];
  POST3: any[];
  searchCity: any;
  closeResult!: string;
  latitudineApi: any;
  longitudineApi: any
  latitudine: any;
  longitudine: any

  constructor(public meteoService: ApiMeteoService) {
    this.message = [];
    this.cardParent = [];
    this.POST = [];
    this.POST2 = [];
    this.POST3 = [];

  }
  ngOnInit(): void { }

  //geolocalizzazione
  getGeoLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitudine = position.coords.latitude;
        this.longitudine = position.coords.longitude;
      });
    } else {
      alert("Geolocalizzazione non supportata!");
    }
  }

  //chiamata generale
  callApiMeteo(): void {
    this.meteoService.getApiMeteo(this.searchCity, this.latitudineApi, this.longitudineApi, this.latitudine, this.longitudine).subscribe(res => {
      this.POST.push(res);
      this.cardParent.push(res);
      this.latitudineApi = res.coord.lat;
      this.longitudineApi = res.coord.lon;
      this.callForecastMeteo();
    })
  }

  //chiamata dettagli previsioni prox day
  callForecastMeteo() {
    this.meteoService.getForecastMeteo(this.latitudineApi, this.longitudineApi).subscribe(res => {
      this.message.push(res);
      this.meteoService.setMEssage(this.message);
    })
  }

  //click funzionamento 
  doCityMeteo() {
    this.callApiMeteo();
    this.latitudine = '';
    this.longitudine = '';
    this.searchCity = '';
  }
}
