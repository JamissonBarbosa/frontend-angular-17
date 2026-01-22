import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/view/courses/courses.component';
import { CourseFormComponent } from './courses/view/course-form/course-form.component';



export const COURSES_ROUTES: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'new', component: CourseFormComponent },
  { path: 'edit/:id', component: CourseFormComponent }
];
