import { Injectable } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from './interfaces/user.interface';
import { v4 as uuid } from 'uuid';
import { Register } from './interfaces/register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService) {}

  private users: User[] = [
    {
      id: uuid(),
      name: 'John Doe',
      email: 'user@todo.com',
      password: 'test123',
    },
  ];

  signIn(credentials: Credentials) {
    const user = this.verifyUser(credentials.email, credentials.password);

    this.userService.setUser(user);
  }

  register(newUser: Register) {
    newUser['id'] = uuid();
    this.users.push(newUser as User);
    return newUser;
  }

  resetPassword(reset: ResetPassword) {
    const user = this.verifyUser(reset.email, reset.oldPassword);

    user.password = reset.newPassword;
  }

  resetEmail(reset: ResetEmail) {
    const user = this.verifyUser(reset.email, reset.password);
    user.email = reset.newEmail;
  }

  private verifyUser(email: string, password: string) {
    const user = this.users.find((user) => user.email === email);
    if (!user || user.password !== password) {
      throw new Error('Incorrect Email or Password');
    }
    return user;
  }
}

interface Credentials {
  email: string;
  password: string;
}

interface ResetPassword {
  email: string;
  newPassword: string;
  oldPassword: string;
}

interface ResetEmail {
  email: string;
  newEmail: string;
  password: string;
}
