import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <navbar></navbar>
            <router-outlet></router-outlet>
  `

})
export class AppComponent {
  title = 'angular-events-app-course';
}
