import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetcomponentComponent } from './projetcomponent.component';

describe('ProjetcomponentComponent', () => {
  let component: ProjetcomponentComponent;
  let fixture: ComponentFixture<ProjetcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetcomponentComponent]
    });
    fixture = TestBed.createComponent(ProjetcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
