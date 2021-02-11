import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './functional_components/navbar.component';
import { EventsListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsService } from './services/event-details.service';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetails } from './events/event-details.component';
import { appRoutes } from './services/route';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetails,
    CreateEventComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
