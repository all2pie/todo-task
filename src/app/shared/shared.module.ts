import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

const modules = [
  // Core
  RouterModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,

  // Material
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
];

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: modules,
  exports: [...modules, ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  providers: [AuthGuard, AlertService],
})
export class SharedModule {}
