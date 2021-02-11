import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div>Time: {{event?.time}}</div>
        <div>Price: \${{event?.price}}</div>
        <div [hidden]="!event.location">
            <div>Location: {{event?.location?.address}}, {{event?.location?.country}}</div>
        </div>
        <div *ngIf="event?.url">
            <div>Online URL: {{event?.url}}</div>
        </div>
    </div>
    `
})

export class EventThumbnailComponent{
    @Input() event: any
    @Output() eventClick = new EventEmitter()
    someProperty:any = "some value"
    
    handleClick(){
        this.eventClick.emit(this.event.name)
    }

    logfoo(){
        console.log('foo');
    }
}