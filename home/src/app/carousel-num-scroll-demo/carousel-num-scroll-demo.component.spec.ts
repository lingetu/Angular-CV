import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNumScrollDemoComponent } from './carousel-num-scroll-demo.component';

describe('CarouselNumScrollDemoComponent', () => {
  let component: CarouselNumScrollDemoComponent;
  let fixture: ComponentFixture<CarouselNumScrollDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselNumScrollDemoComponent]
    });
    fixture = TestBed.createComponent(CarouselNumScrollDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
