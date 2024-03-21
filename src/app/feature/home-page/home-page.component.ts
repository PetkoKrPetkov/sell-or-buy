import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/interfaces/item';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  itemList: IItem[] | null = null;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  get isLoggedIn():boolean {
    return this.authService.isLogged;
  }

  ngOnInit(): void {
    this.apiService.loadItems().subscribe({
      next: (value) => {
        this.itemList = value;
        console.log(value);
      },
      error: (err) => console.error(err),
    });
  }
}
