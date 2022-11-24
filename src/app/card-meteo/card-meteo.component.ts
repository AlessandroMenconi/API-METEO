import { Component, Input, OnInit } from '@angular/core';
import { ApiMeteoService } from '../Service/api-meteo.service';

@Component({
  selector: 'app-card-meteo',
  templateUrl: './card-meteo.component.html',
  styleUrls: ['./card-meteo.component.scss']
})
export class CardMeteoComponent implements OnInit {
  @Input() cardChild:any[]
  constructor() { 
    this.cardChild=[]
  }

  ngOnInit(): void {
  }
  

}
