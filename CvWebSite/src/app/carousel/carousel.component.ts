import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
 
})
export class CarouselComponent {
  filter: 'all' | 'active'| 'done' | 'Not started'= 'all';

  allCards = [
    {
      title:'Créer un siteweb CV',
      description:'Ce projet consiste à créer un site web CV en utilisant Angular, il permet de présenter les compétences, les expériences et les formations que j’ai acquises durant mon et scolaire.',
      state:"true",
    },
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      state:"true",
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

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
