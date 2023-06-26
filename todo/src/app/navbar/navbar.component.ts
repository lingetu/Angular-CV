import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Link } from "../link";

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
      title: 'About',
      link: 'about',
    },
    {
      title: 'Contact',
      link: 'contact',
    },
  ];

}
