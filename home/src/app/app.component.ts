import { Component } from '@angular/core';
import { Link } from './link';

import { Card } from './card';

import {MatCardModule} from '@angular/material/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

 
})

export class AppComponent {
  title = "Mon SiteWeb";

  filter: 'all' | 'active'| 'done' | 'Not started'= 'all';

  allCards = [
    {
      title: 'TODO App in Angular',
      description: 'Create a TODO App in Angular',
      state: "true",
    },
    {
      title: 'TODO App in Angular',
      description: 'Create a TODO App in Angular',
      state: "true",
    },
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      state:"doing",
    },
    {
      title: 'Cards in angular',
      description: 'Create a card component in angular',
      state: "false",
    },
  
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      state:"false",
    },
  ];



  get card() {
    if (this.filter == 'all') {
      return this.allCards;
    }
    if(this.filter=="done")
    {
      return this.allCards.filter(item=>item.state=="true");
    }
    if(this.filter=="active")
      {
        return this.allCards.filter(item=>item.state=="doing");
      }
    if(this.filter=="Not started")
      {
        return this.allCards.filter(item=>item.state=="false");
      }

    return undefined;
  }

  



  
  
 
}

