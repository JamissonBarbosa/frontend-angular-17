import { Component, inject, Input } from '@angular/core';
import { Course } from '../../model/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { CategoryPipe } from '../../../shared/Pipe/category.pipe';

const MODULES = [
  CommonModule,
  MatTableModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  CategoryPipe
];

@Component({
  selector: 'app-courses-table',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.scss'
})
export class CoursesTableComponent {
  //Router
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  @Input() courses: Course[] = [];

  readonly  displayedColumns = ['name', 'category', 'actions'];


  onAdd() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

}
