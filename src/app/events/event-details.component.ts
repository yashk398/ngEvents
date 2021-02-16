import { Component, OnInit } from '@angular/core';
import { EventDetailsService } from '../services/event-details.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'event-details',
    templateUrl: "./event-details.component.html"
})

export class EventDetails implements OnInit{
    event:any;
    constructor(private es : EventDetailsService, private route:ActivatedRoute){}
    ngOnInit(){
        this.event = this.es.getEvent(+this.route.snapshot.params['id']);
    }
}
