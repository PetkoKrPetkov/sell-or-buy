import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { EmailDirective } from './validators/email.directive';

@NgModule({
  declarations: [
    SpinnerComponent,
    EmailDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SpinnerComponent, EmailDirective
  ]
})
export class SharedModule { }
