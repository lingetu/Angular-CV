import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  title = "Mon SiteWeb";

  filter: 'all' | 'active'| 'done' | 'Not started'= 'all';

  allCards = [
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      state:"false",
    },
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      state:"false",
    },
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      state:"false",
    },
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      state:"false",
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
