import { NgModule } from '@angular/core';
import {RegisterPageComponent} from '@pages';
import { CommonModule } from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {RegisterPageRoutingModule} from '@pages//register-page/register-page-routing.module';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegisterPageRoutingModule,

  ],
  exports: [
    RegisterPageComponent
  ]
})
export class RegisterPageModule { }
