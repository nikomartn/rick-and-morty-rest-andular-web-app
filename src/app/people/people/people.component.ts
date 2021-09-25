import { Component, OnInit } from '@angular/core';
import { PersonModel } from '../person-model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  search = ""

  onUserWritesSearch(){
    this.showResults = this.search != ""
  }

  showResults = false;

  ngOnInit(): void {
  }

}
