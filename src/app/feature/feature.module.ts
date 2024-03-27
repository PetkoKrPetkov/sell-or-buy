import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    CreateComponent,
    CatalogComponent,
    ItemDetailsComponent,
  ],
  imports: [
    CommonModule, SharedModule, MatButtonModule,
    MatCardModule, RouterModule, FormsModule
  ],
  exports: [HomePageComponent]
})
export class FeatureModule { }
