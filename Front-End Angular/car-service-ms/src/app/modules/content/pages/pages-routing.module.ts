import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


const ROUTES: Routes = [

  {
    path: 'home',
    loadChildren: () => import('@pages//home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path:'login',
    loadChildren: () => import('@pages//login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('@pages//register-page/register-page.module').then(m => m.RegisterPageModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
