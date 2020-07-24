import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  // private sampleObs$ = new BehaviorSubject([]);

  constructor() {
    // this.sampleObs$.next('Test');
  }
}
