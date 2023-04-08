import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent {
  id: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }

}
