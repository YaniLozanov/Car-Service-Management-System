import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentModule} from './content/content.module';
import {ModulesRoutingModule} from './modules-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentModule,
    ModulesRoutingModule
  ],
  exports: [
    ContentModule
  ]
})
export class ModulesModule { }
