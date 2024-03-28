import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IItem } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  item: IItem | null = null;
  private accessToken: string | undefined
  private  _ownerId: string | undefined

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data['_id']);
      const id = data['_id'];

      this.apiService.loadItem(id).subscribe({
        next: (value) => {
          this.item = value;
          console.log(value);
        },
        error: (err) => console.error(err),
      });
    });
  }

  deleteItem(id: string) {
    const lsUser = localStorage.getItem('[user]');
    if (lsUser) {
      const user = JSON.parse(lsUser);
      this._ownerId = user._id;
      this.accessToken = user.accessToken
    }

    this.apiService.deleteItem(id, this.accessToken!).subscribe({
      next: () => {
        console.log('Item deleted successfully');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err.message);
      }
    });
  }
}
