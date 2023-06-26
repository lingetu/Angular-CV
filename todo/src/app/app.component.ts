import { Component } from '@angular/core';
import { Link } from './link';

import { Card } from './card';

import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  styles: ['h1 { color: red; }'],
  
})

export class AppComponent {
  title = 'To do App';

  filter: 'all' | 'active'| 'done' = 'all';

  allCards = [
    {
      title: 'TODO App in Angular',
      description: 'Create a TODO App in Angular',
      done: true,
    },
    {
      title: 'TODO App in Angular',
      description: 'Create a TODO App in Angular',
      done: true,
    },
    {
      title: 'Cards in angular',
      description: 'Create a card component in angular',
      done: false,
    },
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      done:false,
    },
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      done:false,
    },
  ];



  get cards() {
    if (this.filter == 'all') {
      return this.allCards;
    }
    if(this.filter=="done")
    {
      return this.allCards.filter(item=>item.done==true);
    }
    if(this.filter=="active")
      {
        return this.allCards.filter(item=>item.done==false);
      }
    return undefined;
  }

  addCard(title :string ,description: string) {
    this.allCards.unshift({title, description, done: false });
  }

  remove(cards: Card) {
    this.allCards.splice(this.allCards.indexOf(cards), 1);
  }
  
 
}

