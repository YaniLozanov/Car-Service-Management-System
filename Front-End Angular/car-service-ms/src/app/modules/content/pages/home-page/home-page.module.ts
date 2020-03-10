import { NgModule } from '@angular/core';
import {HomePageComponent} from '@pages';
import { CommonModule } from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {HomePageRoutingModule} from '@pages//home-page/home-page-routing.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [
      SharedModule,
      CommonModule,
      HomePageRoutingModule,
    ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
