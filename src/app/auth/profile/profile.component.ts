import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/localStorage.service';
import { AuthService } from '../auth-service.service';
import { ApiService } from 'src/app/api.service';
import { IItem } from 'src/app/interfaces/item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  email: string | null = null;
  ownerId: string | null = null;
  itemList: IItem[] | null = null;

  constructor(
    private localStorageService: LocalStorageService,
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.email = this.localStorageService.getItem('[user]')?.email;
    this.ownerId = this.localStorageService.getItem('[user]')?._id;
    console.log(this.ownerId);

    this.apiService.loadItems().subscribe({
      next: (value) => {
        this.itemList = value.filter(item => item._ownerId === this.ownerId);
        console.log(this.itemList);
      },
      error: (err) => console.error(err),
    });
  }
}
