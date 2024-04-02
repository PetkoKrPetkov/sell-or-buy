import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FeatureModule } from '../feature/feature.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, FeatureModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
