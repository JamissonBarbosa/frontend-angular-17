import { Component, inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../model/course';
import { CoursesTableComponent } from '../../components/courses-table/courses-table.component';


const MODULES = [
  CommonModule,
  MatTableModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
];

const COMPONENTS = [
  CoursesTableComponent
]


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [...MODULES, ...COMPONENTS],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  //services
  private courseService: CoursesService = inject(CoursesService);
  //Router
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);


  courses$: Observable<Course[]> = this.courseService.list().pipe(
    catchError(error => {
      this.onError('Erro ao carregar cursos.');
      return of([]);
    })
  );

  constructor(public dialog: MatDialog) {}

  onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      }
    );
  }


    onAdd() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }
}
