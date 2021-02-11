import {Injectable} from '@angular/core'
import { EventsListComponent } from '../events/event-list.component'

@Injectable()
export class EventDetailsService{
    getEvents(){
        return eventList;
    }

    getEvent(id:number){
        return eventList.find(event => event.id===id);
    }
}

const eventList = [
    {
        id:1,
        name: 'Angular Connect',
        date: '10/25/2022',
        time: '10:00:00 am',
        price: 599.99,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
        location: {
            address: '1050 DT',
            city: 'London',
            country: 'England'
        }
    },
    {
        id:2,
        name: 'React Connect',
        date: '10/20/2022',
        time: '05:00:00 pm',
        price: 999.99,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
        url: 'https://somethingwentwrong.com'
    },
    {
        id:3,
        name: 'OpenCV2 Connect',
        date: '10/20/2022',
        time: '05:00:00 pm',
        price: 999.99,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
        location: {
        address: '1050 DT',
        city: 'London',
        country: 'England'
        }
    },
    {
        id:4,
        name: 'C Basics Connect',
        date: '10/20/2022',
        time: '05:00:00 pm',
        price: 999.99,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
        location: {
        address: '1050 DT',
        city: 'London',
        country: 'England'
    }
    }
];