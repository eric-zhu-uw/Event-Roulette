import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Subscription } from "rxjs/Rx";
import { Observable } from "rxjs";
import { OutputComponent } from '../output/output.component';

@Injectable()
export class RouletteService {

  address: string;
  city: string;
  province: string;
  postalCode: string;
  type: string;
  longitude: number;
  latitude: number;
  pos: number;


  place: string;
  location: string;
  opened: boolean;
  iconURL: string;

  constructor(private http: Http) { }

  getGeocoding(){
    console.log(this.address);
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+this.address+this.city+this.province+this.postalCode+'&key=AIzaSyBQjou0CRy_PADqu4PcSy75jVUxg7pkuo8')
    .map((res: Response) => {
        const data = res.json();
        console.log(data.results[0].geometry.location);
        this.longitude = data.results[0].geometry.location.lng;
        this.latitude = data.results[0].geometry.location.lat;
        console.log(this.longitude);
        console.log(this.latitude);
      })
      .catch((error:any) => Observable.throw(error.json())); // error check here
  }

  getPlaces(){ // maybe want keyword 
    return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+this.latitude+','+this.longitude+'&rankby=distance&type='+this.type+'&key=AIzaSyBQjou0CRy_PADqu4PcSy75jVUxg7pkuo8')
    .map((res: Response) => {
      const data = res.json();
      this.pos = this.randomNumber(0, (data.results.length - 1));
      this.place = data.results[this.pos].name;
      this.location = data.results[this.pos].vicinity;
      this.opened = data.results[this.pos].opening_hours.open_now;
      this.iconURL = data.results[this.pos].icon;
      
      
      console.log(data.results[this.pos]);
      console.log(this.place);
      console.log(this.location);
      console.log(this.opened);
      console.log(this.iconURL);

    })
    .catch((error:any) => Observable.throw(error.json()));
  }

  randomNumber(min: number, max: number){
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
