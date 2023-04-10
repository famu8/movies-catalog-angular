import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from 'src/app/model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:3001/movies'; // Cambiar por la URL de tu API

  constructor(private http: HttpClient) { }

  updateMovie(movie: movie): Observable<movie> {
    const url = `${this.apiUrl}/${movie.id}`;
    return this.http.put<movie>(url, movie);
  }
}
