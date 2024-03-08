import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [HomePageComponent]
})
export class FeatureModule { }
