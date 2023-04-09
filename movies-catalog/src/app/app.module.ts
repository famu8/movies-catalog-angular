import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesPosterComponent } from './pages/movies-poster/movies-poster.component';
import { MoviesEditComponent } from './pages/movies-edit/movies-edit.component';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieFormComponent } from './pages/movies-edit/form-movies-edit/form-movies-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPosterComponent,
    MoviesEditComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
