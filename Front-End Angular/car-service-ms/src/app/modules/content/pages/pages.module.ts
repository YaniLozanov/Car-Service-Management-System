import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesRoutingModule} from '@pages//pages-routing.module';
import {HomePageModule} from '@pages//home-page/home-page.module';
import {LoginPageModule} from '@pages//login-page/login-page.module';
import {RegisterPageModule} from '@pages//register-page/register-page.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageModule,
    LoginPageModule,
    RegisterPageModule,

    PagesRoutingModule
  ],
  exports: [
    HomePageModule,
    LoginPageModule,
    RegisterPageModule
  ]
})
export class PagesModule { }
