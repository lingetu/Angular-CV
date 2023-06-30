import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CardComponent,
    NavbarComponent,

  ],
  imports: [
    
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: '**', component: NotFoundComponent},

    ])
      
    

  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
