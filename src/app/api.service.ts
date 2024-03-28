import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IItem } from './interfaces/item';

export const apiURL: string = 'http://localhost:3030';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadItems() {
    return this.httpClient.get<IItem[]>('/api' + '/data/catalog');
  }

  loadItem(_id: string) {
    return this.httpClient.get<IItem>('/api' + '/data/catalog/' + _id);
  }

  createItem(
    make: string,
    model: string,
    year: number,
    description: string,
    price: number,
    img: string,
    material: string,
    _ownerId: string,
    accessToken: string
  ) {
    const payload = { make, model, year, description, price, img, material, _ownerId };
    const headers = new HttpHeaders({
      'x-authorization': accessToken
    });
    return this.httpClient.post<IItem>('/api' + '/data/catalog', payload, { headers });
  }

  deleteItem(id: string,  accessToken: string) {
    const headers = new HttpHeaders({
      'x-authorization': accessToken,
    });
    
    return this.httpClient.delete<IItem>('/api/data/catalog/' + id, { headers })
  }
}
