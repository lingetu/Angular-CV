import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  allLinks = [
    {
      title: 'Home',
      link: 'home',
    },
    {
      title: 'projets',
      link: '/projet',
    },
    {
      title: 'Mon CV',
      link: '/cv',
    },
  ];

}
