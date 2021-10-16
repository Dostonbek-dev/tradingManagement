import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { NewsComponent } from './news/news.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ActivityComponent } from './activity/activity.component';
import { CustomerOpenionComponent } from './customer-openion/customer-openion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainScreenComponent,
    NewsComponent,
    ActivityComponent,
    CustomerOpenionComponent
  ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        ButtonModule,
        CardModule,
        CarouselModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
