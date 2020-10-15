import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DevsComponent } from './devs/devs.component';
import { DonutViewComponent } from './donut-view/donut-view.component';
import { DevViewComponent } from './dev-view/dev-view.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {DonutServiceService} from './donutservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DevsComponent,
    DonutViewComponent,
    DevViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DonutServiceService, HttpClient, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
