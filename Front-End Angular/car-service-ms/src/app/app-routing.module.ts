import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch:"full",
    redirectTo: 'home'},
  {
    path: 'register',
    loadChildren: () => import('@content/content.module').then(m => m.ContentModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
