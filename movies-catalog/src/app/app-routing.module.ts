import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesEditComponent } from './pages/movies-edit/movies-edit.component';
import { MoviesPosterComponent } from './pages/movies-poster/movies-poster.component';

const routes: Routes = [
  { path: '', component: MoviesPosterComponent },
  { path: 'edit/:id', component: MoviesEditComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
