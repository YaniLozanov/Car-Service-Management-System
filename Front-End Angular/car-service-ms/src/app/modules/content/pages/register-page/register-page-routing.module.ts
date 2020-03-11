import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterPageComponent} from '@pages';

const routes: Routes = [
  {path: 'register', component: RegisterPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterPageRoutingModule { }
