import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


import { CoursesService } from '../../services/courses.service';


const MODULES = [
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatSelectModule,
  MatSnackBarModule
];

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  //Service
  private coursesService = inject(CoursesService);
  //Forms
  private formBuilder: FormBuilder = inject(FormBuilder);
  //SnackBar
  private snackBar: MatSnackBar = inject(MatSnackBar);
  //Routes
  private location: Location = inject(Location);
  //Form Group
  form: FormGroup = this.formBuilder.group(
    {
      name: new FormControl('', { nonNullable: true }),
      category: new FormControl('', { nonNullable: true, })
    }
  );

  onCancel() {
    this.location.back();
  }

  openSnackBarError(err: any) {
    this.snackBar.open('Erro ao salvar curso!', 'X', { duration: 2000 });
  }
  openSnackBarSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', 'X', { duration: 2000 });
    this.onCancel();
  }

  onSubmit() {
    this.coursesService.save(this.form.value).subscribe({
      next: result => {
        this.openSnackBarSuccess();
      },
      error: err => {
        this.openSnackBarError(err);
      }
    });
  }
}
