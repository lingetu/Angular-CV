import { Injectable } from '@angular/core';
    
@Injectable()
export class ProductService {
    getProductsData() {
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

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

   

  
}