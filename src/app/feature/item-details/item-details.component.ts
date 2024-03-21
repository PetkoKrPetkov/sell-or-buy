import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IItem } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  item: IItem | null = null;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data['_id']);
      const id = data['_id'];

      this.apiService.loadItem(id).subscribe({
        next: (value) => {
          this.item = value;
          console.log(value);
        },
        error: (err) => console.error(err),
      });
    });
  }
}
