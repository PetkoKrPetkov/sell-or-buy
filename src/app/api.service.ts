import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from './interfaces/item';

const apiURL: string = 'http://localhost:3030';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  loadItems() {
    return this.httpClient.get<IItem[]>(apiURL + '/data/catalog');
  }

  loadItem(_id: string) {
    return this.httpClient.get<IItem>(apiURL + '/data/catalog/' + _id);
  }

  createItem(
    make: string,
    model: string,
    year: string,
    description: string,
    price: string,
    img: string,
    material: string,
    _ownerId: string
  ) {
    return this.httpClient.post<IItem>(apiURL + '/data/catalog', {
      make,
      model,
      year,
      description,
      price,
      img,
      material,
      _ownerId,
    });
  }
}
