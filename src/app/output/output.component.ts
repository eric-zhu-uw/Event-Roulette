import { Component, Input, OnInit} from '@angular/core';
import { RouletteService } from '../roulette/roulette.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit{

  place: string = "temp";
  location: string = "temp";
  opened: boolean = false;
  iconURL: string = "temp";

  constructor(private rS: RouletteService) { }

  ngOnInit(){
    this.place = this.rS.place;
    this.location = this.rS.location;
    this.opened = this.rS.opened;
    this.iconURL = this.rS.iconURL;
  }


}
