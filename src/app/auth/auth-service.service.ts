import { Injectable } from '@angular/core';
import { IAuthUser } from '../../app/interfaces/authUser';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IAuthUser | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    const lsUser = localStorage.getItem(this.USER_KEY);
    if (lsUser) {
      this.user = JSON.parse(lsUser);
    }
  }

  login(email: string, password: string) {
    return this.http.post<IAuthUser>('/api/users/login', { email, password })
      .pipe(
        tap(user => {
          this.user = user;
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        })
      );
  }

  register(email: string, password: string) {
    return this.http.post<IAuthUser>('/api/users/register', { email, password })
      .pipe(
        tap(user => {
          this.user = user;
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        })
      );
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}

