import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent, HeaderComponent} from '@layout';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MatToolbarModule
  ]

})
export class CoreModule { }
