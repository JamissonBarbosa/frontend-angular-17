import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly apiUrl = environment.apiUrl;
  private httpClient: HttpClient = inject(HttpClient);

  list() {
    return this.httpClient.get<Course[]>(`${this.apiUrl}/courses`)
    .pipe(
      first(),
      delay(4000),
      tap(courses => console.log(courses))
    );
  }
}
