import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@content/content.module')
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
export class ModulesRoutingModule { }
