import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>  import('@pages//pages.module').then(m => m.PagesModule)
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[
    RouterModule
  ]
})export class ContentRoutingModule { }
