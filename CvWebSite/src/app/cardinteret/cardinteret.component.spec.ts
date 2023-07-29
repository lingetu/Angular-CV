import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinteretComponent } from './cardinteret.component';

describe('CardinteretComponent', () => {
  let component: CardinteretComponent;
  let fixture: ComponentFixture<CardinteretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardinteretComponent]
    });
    fixture = TestBed.createComponent(CardinteretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
