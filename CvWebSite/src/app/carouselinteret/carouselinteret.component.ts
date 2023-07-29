import { Component } from '@angular/core';

@Component({
  selector: 'app-carouselinteret',
  templateUrl: './carouselinteret.component.html',
  styleUrls: ['./carouselinteret.component.css']
})
export class CarouselinteretComponent {
  filter: 'all' | 'Experience' | 'No Experience'= 'all';

  allinteret = [
    {
      title:'Développement de jeux vidéo',
      description:'Les jeux vidéo, ma passion.',	
      state:"true",
      url:'../../assets/reshot-illustration-video-game-app-6HTCJRGPE8.png'
    },
    {
      title:'Développment Web',
      description:'C’est un domaine que je trouve sans fin',	
      state:"true",
      url:'../../assets/reshot-illustration-website-design-team-8Q23497FBW.png'
    },
    {
      title:'Développment Logiciel',
      description:'C’est ',	
      state:"true",
      url:'../../assets/reshot-illustration-software-development-team-9Y6HDF3TA8.png'
    },
    {
      title:'IA',
      description:'Je pense que L’IA est le futur',	
      state:"false",
      url:'../../assets/reshot-illustration-artificial-intelligence-SW75GND2ML.png'
    },
   
   
    {
      title:'Cybersécurité',
      description:'Un domaine qui à besoin d’évoluer aussi rapidement que la croissance en puissance des ordinateurs ',	
      state:"false",
      url:'../../assets/reshot-illustration-system-security-TLXU7M4JC5.png'
    },
    
    {
      title:'Développement d’application mobile',
      description:'Un domaine qui me semble intéressant',
      state:"false",
      url:'../../assets/reshot-illustration-mobile-app-development-team-T3D7E286LV.png'
    },
    {
      title:'Réalité virtuelle/augmentée',
      description:'Le casque de réalité augmenté de Apple m’a fait un choc',	
      state:"false",
      url:'../../assets/reshot-illustration-virtual-reality-world-9WJ2L7XB4V.png'
    },
   
   
   
  ];



  get interet() {
    if (this.filter === 'all') {
      return this.allinteret;
    }
    if(this.filter==="Experience")
    {
      return this.allinteret.filter(item=>item.state=="true");
    }
    if(this.filter==="No Experience")
      {
        return this.allinteret.filter(item=>item.state=="false");
      }
   

    return undefined;
  }

}
