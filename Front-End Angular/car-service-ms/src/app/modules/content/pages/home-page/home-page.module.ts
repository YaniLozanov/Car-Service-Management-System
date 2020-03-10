import { NgModule } from '@angular/core';
import {HomePageComponent} from '@pages';
import { CommonModule } from '@angular/common';
import {HomePageRoutingModule} from '@pages//home-page/home-page-routing.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
