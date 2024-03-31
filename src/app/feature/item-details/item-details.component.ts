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
  private accessToken: string | undefined;
  private _ownerId: string | undefined;
  public isOwner: boolean | undefined;
  private lsUser: string | null = null;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lsUser = localStorage.getItem('[user]');

    this.activatedRoute.params.subscribe((data) => {
      console.log(data['_id']);
      const id = data['_id'];

      this.apiService.loadItem(id).subscribe({
        next: (value) => {
          this.item = value;
          console.log(value);
          this.checkOwnership();
        },
        error: (err) => console.error(err),
      });
    });
  }

  checkOwnership() {
    if (this.lsUser) {
      const user = JSON.parse(this.lsUser);
      this._ownerId = user._id;
      this.accessToken = user.accessToken;
      this.isOwner = this.item?._ownerId === this._ownerId;
    }
  }

  deleteItem(id: string) {
    if (this.isOwner) {
      this.apiService.deleteItem(id, this.accessToken!).subscribe({
        next: () => {
          console.log('Item deleted successfully');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err.message);
        },
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
