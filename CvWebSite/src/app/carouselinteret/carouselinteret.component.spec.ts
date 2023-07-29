import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselinteretComponent } from './carouselinteret.component';

describe('CarouselinteretComponent', () => {
  let component: CarouselinteretComponent;
  let fixture: ComponentFixture<CarouselinteretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselinteretComponent]
    });
    fixture = TestBed.createComponent(CarouselinteretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
