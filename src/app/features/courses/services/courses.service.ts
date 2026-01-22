import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  //json-server URL
  private readonly apiUrl = environment.apiUrl;
  //fast-api URL
  private readonly fastApiUrl = 'api/courses';

  private httpClient: HttpClient = inject(HttpClient);

  list() {
    return this.httpClient.get<Course[]>(`${this.apiUrl}/courses`)
    //return this.httpClient.get<Course[]>(`${this.fastApiUrl}`)
    .pipe(
      first(),
      delay(1000),
      tap(courses => console.log(courses))
    );
  }

  save(course: Partial<Course>) {
    return this.httpClient.post<Course>(`${this.apiUrl}/courses`, course).pipe(first());
  }
}
