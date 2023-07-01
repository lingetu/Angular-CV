import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [

    NotFoundComponent,
    CardComponent,
    NavbarComponent,
    AppComponent,
    HomePageComponent

  ],
  imports: [

    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgbModule,

    



  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, RouterModule]


})
export class AppModule { }
