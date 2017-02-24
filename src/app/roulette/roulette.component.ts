import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { RouletteService } from './roulette.service';
import { FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit, OnDestroy {
   
  constructor(private rS: RouletteService,
              private router: Router,) {}

  private longitude: number;
  private latitude: number;
  types: string[] = ['select type', 'bar', 'cafe', 'gym', 'library', 
                     'museum', 'night_club', 'restaurant', 'shopping_mall'];
  myForm: FormGroup;


  ngOnInit() {
    // this.subscription = this.s
    this.myForm = new FormGroup({
      'address' : new FormControl('', [Validators.required]),
      'city' : new FormControl('', [Validators.required]),
      'province': new FormControl(''),
      'postalCode': new FormControl('', [Validators.required, Validators.pattern(/[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/i)]),
      'type': new FormControl('', Validators.required)
  });
  }

  onSubmit(){
    console.log(this.myForm.value);
    this.rS.address = this.myForm.value.address;
    this.rS.city = this.myForm.value.city;
    this.rS.province = this.myForm.value.province;
    this.rS.postalCode = this.myForm.value.postalCode;
    this.rS.type = this.myForm.value.type;


    this.rS.getGeocoding().subscribe(
      event => {},
      error => {},
      () => {
        this.rS.getPlaces().subscribe(
          event => {},
          error => {},
          () => {
            console.log('hi');
            this.router.navigate(['/output']);
            console.log('bye')
          }
        )// to chain API's so datat is passed on properly
         // will auto-unsubscribe to subscription after http.get request
      }
    );
  }

  ngOnDestroy(){

  }
}
