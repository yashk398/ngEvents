import { Component } from '@angular/core';
import { EventDetailsService } from '../services/event-details.service'

@Component({
  selector: 'event-list',
  template: `
    <div id='main'>
        <h1>UPCOMING ANGULAR EVENTS</h1>
        <hr/> 
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail #thumbnail (click)="handleEventClicked(event.name)" [event] = "event"></event-thumbnail>
            </div>
        </div>
    </div>
  `,
  styles: [`
  #main{
    padding: 1em 5em;
  }
`]

})
export class EventsListComponent{

  events:any;
  constructor(private es : EventDetailsService){}


  ngOnInit(){
    this.events = this.es.getEvents();
  }
    
  handleEventClicked(data){
        console.log("recieved : ",data);
  }
}