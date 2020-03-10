import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesModule} from '@pages//pages.module';
import {ContentRoutingModule} from './content-routing.module';



@NgModule({
  declarations: [],
  imports: [
    PagesModule,
    CommonModule,
    ContentRoutingModule
  ],
  exports: [
    PagesModule
  ]
})
export class ContentModule { }
