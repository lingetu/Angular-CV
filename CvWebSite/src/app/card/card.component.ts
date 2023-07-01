import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Card } from "../card";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  
  
})



export class CardComponent {


  @Input() card!: Card;
  @Output() remove = new EventEmitter<Card>();
  
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
 

}
