import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from './interfaces/item';

const apiURL: string = 'http://localhost:3030';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadItems() {
    return this.httpClient.get<IItem[]>(apiURL + '/data/catalog');
  }

  loadItem(_id: string) {
    return this.httpClient.get<IItem>(apiURL + '/data/catalog/' + _id);
  }
}
