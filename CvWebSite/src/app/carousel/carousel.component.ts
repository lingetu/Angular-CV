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
      title:'Créer un siteweb Randonnée',
      description:'Ce projet était le sujet de mon stage de 3e année. J’avais pour objectif de créer un site de randonnées muni d’une carte interactive pour rechercher dynamiquement les randonnées. J’ai pour ce faire utilisé ReactJS/TailWindCSS. Cela m’as permis d’obtenir des compétence en React en plus d’angular et d’ajouter une corde à mon arc.',
      state:"true",
    },
    {
      title:'Créer un siteweb CV',
      description:'Ce projet consiste à créer un site web CV en utilisant Angular, il permet de présenter les compétences, les expériences et les formations que j’ai acquises durant mon parcours scolaire. J’ai utilisé Angular car c’est un framework souvent utilisé dans les grands groupes, de plus il est très complet et m’a permis de découvrir le Front-end sous un autre angle qui est bien plus plaisant que de faire du HTML/CSS pur. ',
      state:"true",
    },
    {
      title:'Un générateur de monde aléatoire sur Unity',
      description:'J’avais envie de comprendre comment les jeux vidéo fonctionnent, j’ai donc commencé par faire un générateur de monde aléatoire en C# sur Unity. Ce projet m’a permis d’appliquer les connaissances de C# que j’ai acquises au cours de ma prépa, cela m’a permis de comprendre comment un jeu est construit. ',
      state:"true",
    },
   
    {
      title:'Application de détourage de forme en C#',
      description:' C’était un réel défi, car je me suis retrouvé à appliquer pour la première certaines théories vu en cours, plus particulièrement les séries de fouriers. De plus je reprenais le projet d’un ancien élève, j’ai donc dû comprendre son code et le modifier pour qu’il corresponde à mes besoins.',
      state:"true",
    },
    {
      title:'Recréer le jeu terraria en C# sur Unity',
      description:'En ayant fait mes premiers pas sur Unity avec le générateur de monde aléatoire, j’ai décidé de me lancer dans un projet plus ambitieux qui est de recréer le jeu Terraria en C# sur Unity. C’est mon premier projet réellement ambitieux, car je me lançais dans l’inconnu total.',
      state:"false",
    },
  
    {
      title:'Créer ma première application mobile',
      description:'Le but de ce projet est de découvrir pour la première fois le développement mobile, mon but serait de faire un semblant de réseau social. Pour découvrir la manière dont un réseau social est construit et comment il fonctionne.',
      state:"false",
    },
    {
      title:'Recréer le Front-end des grands sites web en angular',
      description:'Le but serait uniquement d’améliorer mes compétences en Angular',
      state:"false",
    },
    {
      title:'Un jeux vidéo vue du dessus en C++/Blueprint sur Unreal Engine 5',
      description:'Ce jeu me permettrait de réaliser un rêve, créer mon propre jeux vidéo et donc pouvoir le modifié à ma guise. Pour ce faire je compte collaborer avec certains de mes camarades de promotion.',
      state:"active",
    },
  ];



  get card() {
    if (this.filter === 'all') {
      return this.allCards;
    }
    if(this.filter==="done")
    {
      return this.allCards.filter(item=>item.state=="true");
    }
    if(this.filter==="active")
      {
        return this.allCards.filter(item=>item.state=="active");
      }
    if(this.filter==="Not started")
      {
        return this.allCards.filter(item=>item.state=="false");
      }

    return undefined;
  }

  

}
 