import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMoviesEditComponent } from './form-movies-edit.component';

describe('FormMoviesEditComponent', () => {
  let component: FormMoviesEditComponent;
  let fixture: ComponentFixture<FormMoviesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMoviesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMoviesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
