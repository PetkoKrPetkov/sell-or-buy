import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLoggedIn():boolean {
    return this.authService.isLogged;
  }

  get name(): string {
    return this.authService.user?.email.split('@')[0]  || '';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  constructor(private authService: AuthService,  private router: Router) {}
}
