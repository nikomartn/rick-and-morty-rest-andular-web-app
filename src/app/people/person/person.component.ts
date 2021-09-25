import { Component, Input, OnInit } from '@angular/core';
import { PersonModel } from '../person-model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor() { }

  public _personmodel:PersonModel | null = null;
  @Input() set personmodel(value: PersonModel | null) {
      if (value !== null){
        this._personmodel = value;
      if (value.status == "Dead"){
        this.colordead = "darkred";
      } else if (value.status == "Alive"){
        this.colordead = "green"
      } else {
        this.colordead = "gray"
      }
    }
    
  }

  colordead = "blue";

  ngOnInit(): void {
  }

}
