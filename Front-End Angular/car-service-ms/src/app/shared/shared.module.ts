import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'angular-bootstrap-md';
import {
  CardComponent,
  TitleComponent,
  ButtonComponent,
  CarouselComponent,
  SubtitleComponent,
  LoginFormComponent,
  RegisterFormComponent
} from '@components';


@NgModule({
  declarations: [
    CardComponent,
    TitleComponent,
    ButtonComponent,
    CarouselComponent,
    SubtitleComponent,
    ButtonComponent,
    LoginFormComponent,
    RegisterFormComponent
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
      LoginFormComponent,
      RegisterFormComponent,
    ]
})
export class SharedModule { }
