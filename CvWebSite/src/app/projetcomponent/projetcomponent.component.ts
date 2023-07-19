import { Component } from '@angular/core';

@Component({
  selector: 'app-projetcomponent',
  templateUrl: './projetcomponent.component.html',
  styleUrls: ['./projetcomponent.component.css']
})
export class ProjetcomponentComponent {

  filter: 'all' | 'active'| 'done' | 'Not started'= 'all';

  allProjet = [
    {
      title:'Créer un siteweb CV',
      description:'Ce projet consiste à créer un site web CV en utilisant Angular, il permet de présenter les compétences, les expériences et les formations que j’ai acquises durant mon et scolaire.',
      state:"true",
      number:0,
    },
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      state:"true",
      number:1
    },
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      state:"active",
      number:2
    },
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      state:"false",
      number:3
    },
  
    {
      title:'Create a website CV in angular',
      description:'Create a website CV in angular',
      state:"false",
      number:4
    },
  ];



  get projet() {
    if (this.filter === 'all') {
      return this.allProjet;
    }
    if(this.filter==="done")
    {
      return this.allProjet.filter(item=>item.state=="true");
    }
    if(this.filter==="active")
      {
        return this.allProjet.filter(item=>item.state=="active");
      }
    if(this.filter==="Not started")
      {
        return this.allProjet.filter(item=>item.state=="false");
      }

    return undefined;
  }

}
