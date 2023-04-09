import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-movies-edit',
  templateUrl: './form-movies-edit.component.html',
  styleUrls: ['./form-movies-edit.component.css']
})
export class MovieFormComponent {
  movieForm!: FormGroup; // Creamos una instancia del formulario

  constructor(private fb: FormBuilder) {
    this.createForm(); // Llamamos a una función para crear el formulario
  }

  createForm() {
    this.movieForm = this.fb.group({
      imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(2100)]],
      director: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    console.log(this.movieForm.value); // Mostramos en la consola los datos del formulario
    //alert para decir que se ha actualizado
    //navegacion a la pagina principal
  }
}
