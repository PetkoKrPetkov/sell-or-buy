import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IItem } from 'src/app/interfaces/item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  item: IItem | null = null;
  private accessToken: string | undefined;
  private _ownerId: string | undefined;
  private itemId: string | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const lsUser = localStorage.getItem('[user]');
    if (lsUser) {
      const user = JSON.parse(lsUser);
      this._ownerId = user._id;
      this.accessToken = user.accessToken;
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data['_id']);
      const id = data['_id'];

      this.apiService.loadItem(id).subscribe({
        next: (value) => {
          this.item = value;
          this.itemId = value._id
          console.log(this.item);
          if (this.item._ownerId !== this._ownerId) {
            console.error('You are not the owner of this item.');
            this.router.navigate(['/']);
          }
        },
        error: (err) => console.error(err),
      });
    });

    
  }

  editItem(form: NgForm): void {
    console.log(form.value);
    if (form.invalid) {
      return;
    }

    const { description, img, make, material, model, price, year } = form.value;
    

    if (this._ownerId) {
      this.apiService
        .updateItem(
          make,
          model,
          year,
          description,
          price,
          img,
          material,
          this._ownerId!,
          this.accessToken!,
          this.itemId!
        )
        .subscribe(() => {
          this.router.navigate(['/catalog/', this.itemId]);
        });
    }
  }
}
