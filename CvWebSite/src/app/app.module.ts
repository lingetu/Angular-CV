import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProjetPageComponent } from './projet-page/projet-page.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { MatCardModule }  from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel'



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjetPageComponent,
    CardComponent,
    NavbarComponent,
    NotFoundComponent,
    CarouselComponent,
    
  ],
  imports: [
    MatCardModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    
   

    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'projet', component: ProjetPageComponent},
      {path: '**', component: NotFoundComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
