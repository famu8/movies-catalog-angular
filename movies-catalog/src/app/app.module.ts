import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesPosterComponent } from './pages/movies-poster/movies-poster.component';
import { MoviesEditComponent } from './pages/movies-edit/movies-edit.component';
import { Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPosterComponent,
    MoviesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
