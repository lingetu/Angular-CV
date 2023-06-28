import { Injectable } from '@angular/core';
    
@Injectable()
export class CardService {
    getAllCard() {
        return [
           
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
    }

  
    getCards(filter: string) {
      if (filter === 'all') {
        return this.getAllCard();
      }
      if (filter === 'active') {
        return this.getAllCard().filter(card => card.state === 'true');
      }
      if (filter === 'done') {
        return this.getAllCard().filter(card => card.state === 'false');
      }
      if (filter === 'Not started') {
        return this.getAllCard().filter(card => card.state === 'doing');
      }
      return [];
}
}