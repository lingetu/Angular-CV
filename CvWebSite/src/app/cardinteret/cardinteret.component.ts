import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { Card, CardInteret } from "../card";
@Component({
  selector: 'app-cardinteret',
  templateUrl: './cardinteret.component.html',
  styleUrls: ['./cardinteret.component.css']
})
export class CardinteretComponent {

  @Input() cardinteret!: CardInteret;
  @Output() remove = new EventEmitter<CardInteret>();

}
