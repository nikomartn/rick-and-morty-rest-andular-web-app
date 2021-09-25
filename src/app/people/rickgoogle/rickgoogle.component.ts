import { Component, Input, OnInit } from '@angular/core';
import { PeoplequeryService } from '../peoplequery.service';
import { PersonModel } from '../person-model';

@Component({
  selector: 'app-rickgoogle',
  templateUrl: './rickgoogle.component.html',
  styleUrls: ['./rickgoogle.component.scss']
})
export class RickgoogleComponent implements OnInit {

  constructor(private peoplequery:PeoplequeryService) { }

  @Input() set query(query:string){
    this.peoplequery.query(query).subscribe(results => {
      this.rickresults = results;
    })
  }


  rickresults:PersonModel[] = []

  ngOnInit(): void {
  }

}
