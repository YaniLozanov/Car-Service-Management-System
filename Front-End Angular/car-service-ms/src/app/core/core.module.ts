import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent, HeaderComponent} from '@layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        RouterModule
    ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MatToolbarModule
  ]

})
export class CoreModule { }
