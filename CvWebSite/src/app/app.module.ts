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
import { ReactiveFormsModule } from '@angular/forms';  
import {FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactFormComponent } from './contact-form/contact-form.component'
import { HttpClientModule } from '@angular/common/http';
import { ProjetcomponentComponent } from './projetcomponent/projetcomponent.component';
import { CarouselinteretComponent } from './carouselinteret/carouselinteret.component';
import { CardinteretComponent } from './cardinteret/cardinteret.component';





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
    ContactFormComponent,
    ProjetcomponentComponent,
    CarouselinteretComponent,
    CardinteretComponent,
    

    
  ],
  imports: [
    MatCardModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    
   

    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'cv', component: CvComponent},
      {path: '**', component: NotFoundComponent},
      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
