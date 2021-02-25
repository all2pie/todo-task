import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AlertService } from '../../../shared/services/alert.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.styles.scss'],
})
export class RegisterComponent {
  fg = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
  });

  constructor(
    private authService: AuthService,
    private alert: AlertService,
    private router: Router
  ) {}

  register() {
    if (!this.fg.valid) {
      return;
    }

    try {
      this.authService.register(this.fg.value);
      this.router.navigateByUrl('/auth/login');
    } catch (error) {
      this.alert.addError('Error', error);
    }
  }
}
