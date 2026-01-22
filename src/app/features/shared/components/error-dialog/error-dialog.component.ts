import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogContent,
  MatDialogActions
} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';

const MODULES = [
  MatDialogClose,
  MatDialogContent,
  MatDialogActions,
  MatButtonModule
];

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}
