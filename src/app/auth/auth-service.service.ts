// import { Injectable } from '@angular/core';
// import { IAuthUser } from '../../app/interfaces/authUser';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   user: IAuthUser | undefined;
//   USER_KEY = '[user]';

//   get isLogged():boolean {
//     return !!this.user
//   }

//   constructor(private http: HttpClient) {
//     try {
//       const lsUser = localStorage.getItem(this.USER_KEY) || '';
//       this.user = JSON.parse(lsUser);
//     } catch (error) {
//       this.user  = undefined;
//     }
//   }

//   login(email:string, password:string) {
//     return this.http.post<IAuthUser>('/api/users/login', {email, password});


//   }

//   register(email: string, password: string) {
//     return this.http.post<IAuthUser>('/api/users/register', {email, password})
//   }

//   logout() {
//     this.user = undefined;
//     localStorage.removeItem(this.USER_KEY);
//   }
// }

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
    // Опитайте се да заредите потребителя от localStorage при стартиране на услугата
    const lsUser = localStorage.getItem(this.USER_KEY);
    if (lsUser) {
      this.user = JSON.parse(lsUser);
    }
  }

  login(email: string, password: string) {
    // Изпращане на заявка за вход
    return this.http.post<IAuthUser>('/api/users/login', { email, password })
      .pipe(
        tap(user => {
          // Запазване на потребителя в localStorage след успешен вход
          this.user = user;
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        })
      );
  }

  register(email: string, password: string) {
    // Изпращане на заявка за регистрация
    return this.http.post<IAuthUser>('/api/users/register', { email, password })
      .pipe(
        tap(user => {
          // Запазване на потребителя в localStorage след успешна регистрация
          this.user = user;
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        })
      );
  }

  logout() {
    // Изход на потребителя
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}

