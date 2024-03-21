import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IItem } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit{
  item: IItem | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadItem("65e99cfe4a43bf49278f84c2").subscribe({
    next: (value) => {
      this.item = value;
      console.log(value);
    },
    error: (err) => console.error(err),
    });
  }
}
