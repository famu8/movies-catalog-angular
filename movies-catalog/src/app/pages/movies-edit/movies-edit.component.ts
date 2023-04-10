import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent {
  movie!: movie;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.http.get<movie[]>(`http://localhost:3001/movies?id=${id}`)
      .subscribe((data: movie[]) => {
        this.movie = data[0];
        console.log("esta es la pelicula movies-edit: ",this.movie);
      });
    });
  }

  onUpdate() {
    this.router.navigateByUrl(`/edit/${this.movie.id}`);
  }


}
