import { Component, inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

const MODULES = [
  MatProgressSpinnerModule,
  MatTableModule,
  MatCardModule,
  MatToolbarModule
];

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [...MODULES, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courseService: CoursesService = inject(CoursesService);
  courses$: Observable<Course[]> = this.courseService.list().pipe(
    catchError(error => {
      console.error('Error loading courses', error);
      return of([]);
    })
  );
  displayedColumns = ['name', 'category'];

  constructor(public dialog: MatDialog) {}

  onError(message: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: {
          animal: 'panda',
        },
      });
    }

}
