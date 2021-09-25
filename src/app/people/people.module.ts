import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PersonComponent } from './person/person.component';
import { PeopleComponent } from './people/people.component';
import { RickOfTheDayComponent } from './rick-of-the-day/rick-of-the-day.component';
import { RickgoogleComponent } from './rickgoogle/rickgoogle.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent,
    RickOfTheDayComponent,
    RickgoogleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class PeopleModule { }
