import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Hotel } from '../../model/hotel';
import { Restaurant } from '../../model/restaurant';
import { Dettagliostruttura } from '../dettagliostruttura/dettagliostruttura';

@Component({
    selector: 'page-convenzioni',
    templateUrl: 'convenzioni.html'
  })

export class Convenzioni{

    selectedStrutturaBefoureId: string;
    selectedConv: string;
    hotelsList: Array<Hotel>;
    restaurantsList: Array<Restaurant>;

    constructor(public navCtrl: NavController, public navParams: NavParams){

        this.selectedConv = navParams.data.selectedConv || 'hotels';

        this.hotelsList = [];
        for(let i = 0; i < 10; i++ ){
            this.hotelsList.push(new Hotel(
                100 + i,
                `Hotel${i}`,
                `Via indirizzo, ${i + 20}`,
                `333 ${i}${i%2} ${i}4 560`,
                `descrizione`,
                '/assets/imgs/hotel1.jpg',
                i*30,
            ));
        }

        this.selectedStrutturaBefoureId = navParams.data.itemId || null;

        this.restaurantsList = [];
        for(let i = 0; i < 10; i++ ){
            this.restaurantsList.push(new Restaurant(
                200 + i,
                `Ristorante${i}`,
                `Via indirizzo, ${i + 20}`,
                `333 ${i}${i%2} ${i}4 560`,
                `descrizione`,
                '/assets/imgs/hotel1.jpg',
                'mediterranea',
            ));
        }
    }

    itemTapped(event, item) {
        this.navCtrl.setRoot(Dettagliostruttura, item);
    }

    ionViewWillEnter(){
        if(this.selectedStrutturaBefoureId) document.getElementById(this.selectedStrutturaBefoureId).scrollIntoView();
    }
}