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
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';

import { MatCardModule }  from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjetPageComponent,
    CardComponent,
    NavbarComponent,
    NotFoundComponent,
    CarouselComponent,
    CvComponent,
    ContactComponent,
    
  ],
  imports: [
    MatCardModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FontAwesomeModule,
    
   

    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'projet', component: ProjetPageComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'cv', component: CvComponent},
      {path: '**', component: NotFoundComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
