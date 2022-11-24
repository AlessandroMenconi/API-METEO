import { Component, Input, OnInit } from '@angular/core';
import { main } from '@popperjs/core';
import { ApiMeteoService } from '../Service/api-meteo.service';

interface Card {
  citta: string,
  minTemp: number,
  maxTemp: number,
  mediaTemp: number,
  temperatures: any[]
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],

})
export class ForecastComponent implements OnInit {
  @Input() message: any[];
  mediaG1 = 0;
  mediaG1C2 = 0;
  tempData: any[];
  tempData2: any[];
  temp: any[];
  temp2: any[];
  cards: Card[];

  constructor(public meteoService: ApiMeteoService) {
    this.message = [];
    this.tempData = [];
    this.tempData2 = [];
    this.temp = [];
    this.temp2 = [];
    this.cards = [];

  }
  ngOnInit(): void {
    this.message.push(this.meteoService.getMessage());
    console.log(this.message)
    this.funCitta1()
    if (this.message[0][1]) {
      this.funCitta2()
    } else {
      alert('secondo elemento non trovato')
    }
  }
  funCitta1(): any {
    //Temperature Previsioni 3 giorni
    this.temp.push(
      (this.message[0][0].list[0].main.temp - 273).toFixed(2),
      (this.message[0][0].list[8].main.temp - 273).toFixed(2),
      (this.message[0][0].list[16].main.temp - 273).toFixed(2)
    );
    //Temperatura + Data previsioni 3 giorni
    this.tempData.push(
      { temp: (this.message[0][0].list[0].main.temp - 273).toFixed(2), data: this.message[0][0].list[0].dt_txt },
      { temp: (this.message[0][0].list[8].main.temp - 273).toFixed(2), data: this.message[0][0].list[8].dt_txt },
      { temp: (this.message[0][0].list[16].main.temp - 273).toFixed(2), data: this.message[0][0].list[16].dt_txt }
    );
    //Ciclo per calcolo media della temperatura dei 3 giorni 
    for (let i = 0; i < this.temp.length; i++) {
      this.mediaG1 += parseFloat(this.temp[i]);
    }
    const cardsCitta1: Card = {
      citta: this.message[0][0].city.name,
      maxTemp: Math.max(...this.temp),
      minTemp: Math.min(...this.temp),
      mediaTemp: this.mediaG1 / this.temp.length,
      temperatures: [...this.tempData]
    };

    this.cards.push(cardsCitta1);
  }
  funCitta2(): any {
    this.temp2.push(
      (this.message[0][1].list[0].main.temp - 273).toFixed(2),
      (this.message[0][1].list[8].main.temp - 273).toFixed(2),
      (this.message[0][1].list[16].main.temp - 273).toFixed(2));

    this.tempData2.push(
      { temp: (this.message[0][1].list[0].main.temp - 273).toFixed(2), data: this.message[0][1].list[0].dt_txt },
      { temp: (this.message[0][1].list[8].main.temp - 273).toFixed(2), data: this.message[0][1].list[8].dt_txt },
      { temp: (this.message[0][1].list[16].main.temp - 273).toFixed(2), data: this.message[0][1].list[16].dt_txt });
    for (let i = 0; i < this.temp2.length; i++) {
      this.mediaG1C2 += parseFloat(this.temp2[i]);
    };
    const cardsCitta2: Card = {
      citta: this.message[0][1].city.name,
      maxTemp: Math.max(...this.temp2),
      minTemp: Math.min(...this.temp2),
      mediaTemp: this.mediaG1C2 / this.temp2.length,
      temperatures: [...this.tempData2]
    };
    this.cards.push(cardsCitta2);
  }
  delete(i: number) {
    this.cards.splice(i, 1);
  }
}
