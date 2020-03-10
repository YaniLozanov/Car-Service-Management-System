import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'angular-bootstrap-md';
import {
  CardComponent,
  TitleComponent,
  CarouselComponent
} from '@components';


@NgModule({
  declarations: [
    CardComponent,
    TitleComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    CardComponent,
    TitleComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
