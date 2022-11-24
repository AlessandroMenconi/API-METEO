import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable}from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiMeteoService {
  message:any
  
  constructor(public http:HttpClient) {}
  
  setMEssage(data: any){
    this.message=data
  }
  getMessage(){
    return this.message
  }

  getApiMeteo(city:string, lat:string,long:string,latApi:string,longApi:string):Observable<any>{
    let citta=''
    let latitudineApi=''
    let longitudineApi=''
    let latitudine='';
    let longitudine=''
    if(latApi){
      latitudineApi+='lat='+latApi+'&'
    }
    if(longApi){
      longitudineApi+='lon='+longApi
    }
    if(city){
      citta+='q='+city+'&'
    }
    if(lat){
      latitudine+='lat='+lat+'&'
    }
    if(long){
      longitudine+='lon='+long
    }
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?'+citta+latitudine+longitudine+latitudineApi+longitudineApi+'&appid=891c726c9a56c16731f7e178c352caa3')
  }

  getForecastMeteo(lat:string,long:string):Observable<any>{
    let latitudine='';
    let longitudine='';
    if(lat){
      latitudine+='lat='+lat+'&';
    }
    if(long){
      longitudine+='lon='+long;
    }
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?'+latitudine+longitudine+'&appid=891c726c9a56c16731f7e178c352caa3')
  }
 

}
