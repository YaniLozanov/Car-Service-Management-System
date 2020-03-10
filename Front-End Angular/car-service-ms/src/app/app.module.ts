import { NgModule } from '@angular/core';
import { NgxPopper } from 'angular-popper';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {ModulesModule} from './modules/modules.module';
import {AppRoutingModule} from '@app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxPopper,
    CoreModule,
    SharedModule,
    ModulesModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
