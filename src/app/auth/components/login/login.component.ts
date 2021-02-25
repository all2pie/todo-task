import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AlertService } from '../../../shared/services/alert.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.styles.scss'],
})
export class LoginComponent {
  fg = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private authService: AuthService,
    private alert: AlertService,
    private router: Router
  ) {}

  login() {
    if (!this.fg.valid) {
      return;
    }

    try {
      this.authService.signIn(this.fg.value);
      this.router.navigateByUrl('/app');
    } catch (error) {
      this.alert.addError('Error', error);
    }
  }
}
