import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/pages/movies-edit/movie.service';

@Component({
  selector: 'app-form-movies-edit',
  templateUrl: './form-movies-edit.component.html',
  styleUrls: ['./form-movies-edit.component.css']
})
export class MovieFormComponent {
  movieForm!: FormGroup;
  movie!: movie;
  id!: number;

  constructor(private fb: FormBuilder, private router: Router, private moviesService: MovieService,
    private route: ActivatedRoute, private http: HttpClient) {
    this.createForm();

    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      console.log("Este es el id de la pelicula: ",this.id);
      this.http.get<movie[]>(`http://localhost:3001/movies?id=${this.id}`)
      .pipe(map((data: movie[]) => data[0]))
      .subscribe((data: movie) => {
        this.movieForm.patchValue(data);
      });
    });
  }

  createForm() {
    this.movieForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      poster: ['', [Validators.required, Validators.pattern('https?://.+')]],
      director: ['', [Validators.required, Validators.minLength(3)]],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(2100)]]
    });
  }

  onSubmit() {
    this.movie = this.movieForm.value;
    this.movie.id = this.id;
    this.moviesService.updateMovie(this.movie).subscribe(() => {
      alert('La película ha sido actualizada.');
      this.router.navigate(['/']);
    });
  }
}
