import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IItem } from 'src/app/interfaces/item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  itemList: IItem[] | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadItems().subscribe({
      next: (value) => {
        this.itemList = value;
        console.log(value);
      },
      error: (err) => console.error(err)
    });
  }
}
