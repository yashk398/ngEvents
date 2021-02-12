import {Component} from '@angular/core'

@Component({
    templateUrl: "./create-event.component.html"
})

export class CreateEventComponent{
     meetup = true;
     changevalue(){
          this.meetup=!this.meetup;
     }
}
