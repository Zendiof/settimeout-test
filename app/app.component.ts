import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  appareilName = 'Machine à laver';
	appareilStatus = 'éteint';

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
  	return this.appareilStatus;
  }
}
