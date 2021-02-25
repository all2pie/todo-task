import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../auth/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject: BehaviorSubject<User>;
  public user$: Observable<User>;

  constructor(private router: Router) {
    const user = JSON.parse(localStorage.getItem('user'));
    this.userSubject = new BehaviorSubject<User>(user);
    this.user$ = this.userSubject.asObservable();
  }

  setUser(user?: User) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }

    this.userSubject.next(user);
    return user;
  }

  logOut() {
    this.setUser();
    this.router.navigateByUrl('/auth/login');
  }

  getUser() {
    return this.userSubject.value;
  }
}
