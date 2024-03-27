import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  private _ownerId: string | undefined;
  private accessToken: string | undefined;

  constructor(private apiService: ApiService, private router: Router) {
    const lsUser = localStorage.getItem('[user]');
    if (lsUser) {
      const user = JSON.parse(lsUser);
      this._ownerId = user._id;
      this.accessToken = user.accessToken
    }
  }

  createItem(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);

    const { description, img, make, material, model, price, year } = form.value;
    if (this._ownerId) {
      this.apiService.createItem(
        make,
        model,
        year,
        description,
        price,
        img,
        material,
        this._ownerId!,
        this.accessToken!
      ).subscribe(() => {
        this.router.navigate(['/'])
      });
    }
  }
}
