import { EventDetails } from "../events/event-details.component";
import { EventsListComponent } from "../events/event-list.component";
import {Routes} from '@angular/router'  
import { CreateEventComponent } from "../events/create-event.component";
export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent},
    { path: 'events', component: EventsListComponent},
    { path: 'events/:id', component: EventDetails},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]