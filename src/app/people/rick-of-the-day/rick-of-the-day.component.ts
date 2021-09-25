import { Component, OnInit } from '@angular/core';
import { PeoplequeryService } from '../peoplequery.service';
import { PersonModel } from '../person-model';

@Component({
  selector: 'app-rick-of-the-day',
  templateUrl: './rick-of-the-day.component.html',
  styleUrls: ['./rick-of-the-day.component.scss']
})
export class RickOfTheDayComponent implements OnInit {

  constructor(private query:PeoplequeryService) { }

  ngOnInit(): void {
    this.query.getRandomRick().subscribe((rick) => this.rickoftheday = rick);
  }

  public rickoftheday:PersonModel | null = null;


}
