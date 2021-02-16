import {Component} from '@angular/core'
import { Router } from '@angular/router'
import { EventDetailsService } from '../services/event-details.service'

@Component({
    templateUrl: "./create-event.component.html"
})

export class CreateEventComponent{
     newEvent;
     isDirty:boolean = true;
     meetup = true;
     changevalue(){
          this.meetup=!this.meetup;
     }

     constructor(private router:Router, private eventService: EventDetailsService){

     }

     saveEvent(formValues){
               this.eventService.saveEvent(formValues);
               console.log(formValues, "Yolo");
               this.isDirty=false;
               this.router.navigate(['/events']);
     }
}
