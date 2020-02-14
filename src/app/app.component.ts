import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AboutUs} from "../pages/aboutus/aboutus";
import {Convenzioni} from "../pages/convenzioni/convenzioni";
import {CalendarPage} from "../pages/calendar/calendar";
import * as moment from "moment";
import { ListaCorsi } from '../pages/listacorsi/listacorsi';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CalendarPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

      moment.locale('it');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Chi siamo', component: AboutUs },
      { title: 'Convenzioni', component: Convenzioni },
      { title: 'Calendario', component: CalendarPage },
      { title: 'Lista corsi', component: ListaCorsi }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
