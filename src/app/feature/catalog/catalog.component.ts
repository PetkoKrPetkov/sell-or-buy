import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth-service.service';
import { IItem } from 'src/app/interfaces/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
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
