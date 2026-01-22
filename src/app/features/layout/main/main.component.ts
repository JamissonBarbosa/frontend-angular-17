import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CoursesComponent } from "../../courses/view/courses/courses.component";

const COMPONENTS = [CoursesComponent];

const MODULES = [MatDividerModule];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENTS, ...MODULES, ],
  template: `
    <div class="h-screen flex w-full">
      <!-- Categorias -->
      <app-courses class="w-1/4" />

      <!-- Divisor -->
      <mat-divider class="h-full opacity-50" vertical />

      <!-- Tarefas -->
      <!-- <app-task class="w-3/4 pt-10" /> -->
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
