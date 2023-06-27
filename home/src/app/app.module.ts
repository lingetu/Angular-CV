import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule }  from '@angular/material/card';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselModule } from 'primeng/carousel';
import { CarouselNumScrollDemoComponent } from './carousel-num-scroll-demo/carousel-num-scroll-demo.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CardComponent,
    NavbarComponent,
    CarouselNumScrollDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent,CarouselModule]
})
export class AppModule { }
