import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(private apiService: ApiService) {}

  createItem(
    ev: Event,
    make: string,
    model: string,
    year: string,
    description: string,
    price: string,
    img: string,
    material: string,
    _ownerId: string
  ) {
    ev.preventDefault();
    console.log({model, make});
    
    this.apiService.createItem(
      make,
      model,
      year,
      description,
      price,
      img,
      material,
      _ownerId
    ).subscribe((data) => console.log({data})
    );
  }
}
