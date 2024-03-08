import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GlobalLoaderComponent,
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ]
})
export class CoreModule { }
