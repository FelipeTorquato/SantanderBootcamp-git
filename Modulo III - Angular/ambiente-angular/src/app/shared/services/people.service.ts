import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: "Felipe",
        lastName: "Camurça",
        age: 20
      },
      {
        firstName: "Maria",
        lastName: "Silva",
        age: 28
      },
      {
        firstName: "João",
        lastName: "Pereira",
        age: 32
      },
      {
        firstName: "Marcio",
        lastName: "Santos",
        age: 40
      }
    ]

    return of(peopleArray);
  }

}
