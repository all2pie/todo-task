import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AlertService } from '../../../shared/services/alert.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../auth.styles.scss'],
})
export class ResetPasswordComponent {
  fg = new FormGroup({
    email: new FormControl(null, Validators.required),
    oldPassword: new FormControl(null, Validators.required),
    newPassword: new FormControl(null, Validators.required),
  });

  constructor(
    private authService: AuthService,
    private alert: AlertService,
    private router: Router
  ) {}

  resetPassword() {
    if (!this.fg.valid) {
      return;
    }

    try {
      this.authService.resetPassword(this.fg.value);
      this.router.navigateByUrl('/auth/login');
    } catch (error) {
      this.alert.addError('Error', error);
    }
  }
}
