import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Convenzioni} from '../pages/convenzioni/convenzioni';
import {Dettagliostruttura} from "../pages/dettagliostruttura/dettagliostruttura";
import {AboutUs} from "../pages/aboutus/aboutus";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutUs,
    Dettagliostruttura,
    Convenzioni
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutUs,
    Dettagliostruttura,
    Convenzioni
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
