import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, LOCALE_ID, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Convenzioni} from '../pages/convenzioni/convenzioni';
import {Dettagliostruttura} from "../pages/dettagliostruttura/dettagliostruttura";
import {AboutUs} from "../pages/aboutus/aboutus";
import {NgCalendarModule} from "ionic2-calendar";
import {CalendarPage} from "../pages/calendar/calendar";
import { registerLocaleData } from "@angular/common";
import localeIt from '@angular/common/locales/it'
registerLocaleData(localeIt)


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutUs,
    Dettagliostruttura,
    Convenzioni,
      CalendarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutUs,
    Dettagliostruttura,
    Convenzioni,
      CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      {provide:LOCALE_ID, useValue: 'it-IT'}
  ]
})
export class AppModule {}
