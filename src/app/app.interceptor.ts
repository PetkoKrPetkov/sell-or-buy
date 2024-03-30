import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ErrorService } from './core/error/error.service';
import { Router } from '@angular/router';

const apiURL: string = 'http://localhost:3030';

@Injectable()
class AppInterceptor implements HttpInterceptor {
  API = '/api';

  constructor(private errorService: ErrorService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith(this.API)) {
      req = req.clone({
        url: req.url.replace(this.API, apiURL),
        withCredentials: true,
      });
    }
    console.log(req);

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status == 401) {
          this.router.navigate(['/login']);
        } else {
          this.errorService.setError(err);
          this.router.navigate(['/error']);
        }
        return [err];
      })
    );
  }
}

export const AppInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};

// import {
//   HTTP_INTERCEPTORS,
//   HttpEvent,
//   HttpHandler,
//   HttpHeaders,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable, Provider } from '@angular/core';
// import { Observable } from 'rxjs';

// const apiURL: string = 'http://localhost:3030';

// @Injectable()
// class AppInterceptor implements HttpInterceptor {
//   API = '/api';
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     let headers = new HttpHeaders();
//     if (req.url.startsWith(this.API)) {
//       const accessToken = localStorage.getItem('[user]')
//         ? JSON.parse(localStorage.getItem('[user]')!).accessToken
//         : null;
//       if (accessToken) {
//         headers = headers.set('x-authorization', accessToken);
//         req = req.clone({
//           headers,
//           url: req.url.replace(this.API, apiURL),
//           withCredentials: true,
//         });
//       }
//     }
//     console.log(req);

//     return next.handle(req);
//   }
// }

// export const AppInterceptorProvider: Provider = {
//   useClass: AppInterceptor,
//   multi: true,
//   provide: HTTP_INTERCEPTORS,
// };
