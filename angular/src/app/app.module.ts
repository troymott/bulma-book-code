import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RoutingModule, RoutingComponents } from './routing.module';

import { AppComponent } from './app.component';
import { DataService } from "./services/data.service";
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    Ng2FilterPipeModule,
    Ng2OrderModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
