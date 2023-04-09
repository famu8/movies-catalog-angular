import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent {
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  movie!: movie;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.http.get<movie[]>(`http://localhost:3001/movies?id=${id}`)
      .pipe(
        map((data: movie[]) => data[0]) // Usar el operador filter para obtener solo la primera película en el array
      )
      .subscribe((movie: movie) => {
        this.movie = movie;
        console.log(this.movie); // Mostrar la película en la consola
      });
    });
  }
}
