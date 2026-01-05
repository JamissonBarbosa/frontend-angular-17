import { CoursesComponent } from './features/courses/view/courses.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
]
