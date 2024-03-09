import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CreateComponent,
    CatalogComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule, SharedModule, MatButtonModule,
    MatCardModule
  ],
  exports: [HomePageComponent]
})
export class FeatureModule { }
