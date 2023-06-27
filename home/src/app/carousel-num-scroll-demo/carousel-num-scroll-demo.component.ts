import { Component, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import { ProductService } from '../service/productservice';
import { Card } from '../card';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel-num-scroll-demo.component.html',
  styleUrls: ['./carousel-num-scroll-demo.component.css']
})
export class CarouselNumScrollDemoComponent implements OnInit {
  products: Product[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        {
          return 'success';
        }

      case 'LOWSTOCK':
        {
          return 'warning';
        }

      case 'OUTOFSTOCK':
        {
          return 'danger';
        }
      case undefined:
        {
          return undefined;
        }

    }
    return undefined;
  }

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
}