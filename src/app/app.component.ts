import { Component } from '@angular/core';
import { TestService } from './test.service';
import { initialValue } from './app-init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'codeing-test';
  initialValue: any = initialValue;
  serviceValue: number = '';
  inputValue: string = '';

  constructor(private testService: TestService) {
    this.testService.sampleObs$.subscribe(data => {
      this.serviceValue = data;
    })
  }
}