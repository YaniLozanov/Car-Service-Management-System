import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'angular-bootstrap-md';
import {
  CardComponent,
  TitleComponent,
  ButtonComponent,
  CarouselComponent,
  SubtitleComponent,
  RegisterFormComponent
} from '@components';

@NgModule({
  declarations: [
    CardComponent,
    TitleComponent,
    ButtonComponent,
    CarouselComponent,
    SubtitleComponent,
    RegisterFormComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    CardComponent,
    TitleComponent,
    ButtonComponent,
    CarouselComponent,
    SubtitleComponent,
    RegisterFormComponent
  ]
})
export class SharedModule { }
