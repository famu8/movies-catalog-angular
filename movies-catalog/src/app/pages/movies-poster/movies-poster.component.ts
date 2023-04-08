import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movies-poster',
  templateUrl: './movies-poster.component.html',
  styleUrls: ['./movies-poster.component.css']
})

export class MoviesPosterComponent {
  @Input() movies: movie[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  getData() {
    return this.http.get<movie[]>('http://localhost:3001/movies');
  }

  loadData() {
    this.getData().subscribe((data: movie[]) => {
      this.movies = data;
      //console.log(this.movies);
    });
  }

  ngOnInit() {
    this.loadData();
  }

  navigeteToEdit(movie: movie) {
    this.router.navigate(['/edit', movie.id]);
  }
}
