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
import { CustomerPaymnetComponent } from './customer-paymnet/customer-paymnet.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { VideoInfoComponent } from './video-info/video-info.component';
import { TariffCalculatorComponent } from './tariff-calculator/tariff-calculator.component';
import {DialogModule} from "primeng/dialog";
import {AccordionModule} from "primeng/accordion";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainScreenComponent,
    NewsComponent,
    ActivityComponent,
    CustomerOpenionComponent,
    CustomerPaymnetComponent,
    OurTeamComponent,
    VideoInfoComponent,
    TariffCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    HttpClientModule,
    DialogModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
