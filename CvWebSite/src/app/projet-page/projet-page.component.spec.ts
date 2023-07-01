import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPageComponent } from './projet-page.component';

describe('ProjetPageComponent', () => {
  let component: ProjetPageComponent;
  let fixture: ComponentFixture<ProjetPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetPageComponent]
    });
    fixture = TestBed.createComponent(ProjetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
