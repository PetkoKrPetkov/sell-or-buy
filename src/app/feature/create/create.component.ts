// import { Component } from '@angular/core';
// import { ApiService } from 'src/app/api.service';

// @Component({
//   selector: 'app-create',
//   templateUrl: './create.component.html',
//   styleUrls: ['./create.component.css'],
// })
// export class CreateComponent {
//   private _ownerId: string | undefined;

//   constructor(private apiService: ApiService) {
//     const lsUser = localStorage.getItem('[user]');
//     if (lsUser) {
//       const user = JSON.parse(lsUser);
//       this._ownerId = user._id;
//     }
//   }

//   createItem(
//     ev: Event,
//     make: string,
//     model: string,
//     year: string,
//     description: string,
//     price: string,
//     img: string,
//     material: string
//   ) {
//     ev.preventDefault();
//     console.log({ model, make });

//     const numericYear = parseInt(year, 10);
//     const numericPrice = parseFloat(price);

//     if (this._ownerId) {
//       this.apiService
//         .createItem(
//           make,
//           model,
//           numericYear,
//           description,
//           numericPrice,
//           img,
//           material,
//           this._ownerId
//         )
//         .subscribe((data) => console.log({ data }));
//     } else {
//       console.error('Owner ID not found');
//     }
//   }
// }

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
      console.log(this._ownerId);
      console.log(this.accessToken);
    }
  }
}
