import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable, } from 'rxjs';
import { PersonModel } from './person-model';
import { map } from 'rxjs/operators';

interface data{
  results:PersonModel[]
}

@Injectable({
  providedIn: 'root'
})
export class PeoplequeryService {

  constructor(private http:HttpClient) { }

  query(query:string):Observable<PersonModel[]> {
    let result = [];
    return this.http.get<data>("https://rickandmortyapi.com/api/character/?name="+query).pipe(map(data => {
      return data.results;
    }));
    /*return of([{
      name:"Rick",
      last_episode: "Hola",
      last_location: "Hola",
      alive: "dead",
      spieces: "Hola",
      image:"https://rickandmortyapi.com/api/character/avatar/489.jpeg"
    },{
      name:"Hola",
      last_episode: "Hola",
      last_location: "Hola",
      alive: "alive",
      spieces: "Hola",
      image:"https://rickandmortyapi.com/api/character/avatar/489.jpeg"
    }])*/
  }

  getRandomRick():Observable<PersonModel> {
    return this.query("rick").pipe(map ((ricks) => {
      return ricks[Math.floor(Math.random() * ricks.length + 1)];
    }));
  }
}
