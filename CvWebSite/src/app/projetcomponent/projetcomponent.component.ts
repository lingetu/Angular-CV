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
      description:'Ce projet consiste à créer un site web CV en utilisant Angular, il permet de présenter les compétences, les expériences et les formations que j’ai acquises durant mon et scolaire. J’ai utilisé Angular acr c’est un framework souvent utilisé dans les grands groupes, de plus il est très complet et m’as permis de découvrir le Front-end sous un autre angle qui est bien plus plaisant que de faire du HTML/CSS pure. ',
      state:"true",
      number:0,
    },
    {
      title:'Faire un générateur de monde aléatoire en 2D en C# sur Unity',
      description:'Je mettais lancé dans ce projet car j’avais envie de comprendre comment les jeux vidéos fonctionnent, j’ai donc commencé par faire un générateur de monde aléatoire en C# sur Unity. Ce projet m’a permis d’appliquer les connaissance de C# que j’ai acquise au cours de ma prépa, cela m’a permis de comprendre comment un jeu est construit. ',
      state:"true",
      number:1,
    },
   
    {
      title:'Application de détourage de forme en C#',
      description:'C’étais mon projet de fin de Peip (prépa intégré polytech), c’était un réel défi car je me suis retrouvé à appliquer pour la première toutes les théories que l’on voyait pendant les cours, plus particulièrement les séries de fourier. De plus je reprenais le projet d’un ancien élève, j’ai donc du comprendre son code et le modifier pour qu’il corresponde à mes besoins. ',
      state:"true",
      number:2,
    },
    {
      title:'Recréer le jeu terraria en C# sur Unity',
      description:'En ayant fais mes premiers pas sur Unity avec le générateur de monde aléatoire, j’ai décidé de me lancer dans un projet plus ambitieux qui est de recréer le jeu terraria en C# sur Unity. C’est mon premier projet réellement ambitieux',
      state:"false",
      number:3,
    },
  
    {
      title:'Créer ma première application mobile',
      description:'Le but de ce projet est de découvrir pour la première fois le développement mobile, mon but serait de faire un semblant de réseau social. Pour découvrir la manière dont un réseau sociale est construit et comment il fonctionne.',
      state:"false",
      number:4,
    },
    {
      title:'Recréer le Front-end des grands sites web en angular',
      description:'Le but serait uniquement d’améliorer mes compétences en Angular',
      state:"false",
      number:5,
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
