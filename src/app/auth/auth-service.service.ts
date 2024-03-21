import { Injectable } from '@angular/core';
import { IAuthUser } from '../../app/interfaces/authUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IAuthUser | undefined;
  USER_KEY = '[user]';

  get isLogged():boolean {
    return !!this.user
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user  = undefined;
      console.error(error)
    }
  }

  login() {
    this.user = {
      name: 'hans',
      email: 'hans@hans.hans',
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
