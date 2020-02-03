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

    selectedStrutturaBefoure: string;
    selectedConv: string;
    hotelsList: Array<Hotel>;
    restaurantsList: Array<Restaurant>;

    constructor(public navCtrl: NavController, public navParams: NavParams){
        this.selectedConv = navParams.get('selectedConv') || 'hotels';
        this.selectedStrutturaBefoure = navParams.get('itemName');

        this.hotelsList = [];
        for(let i = 0; i < 10; i++ ){
            this.hotelsList.push(new Hotel(
                `Hotel${i}`,
                `Via indirizzo, ${i + 20}`,
                `333 ${i}${i%2} ${i}4 560`,
                `descrizione`,
                '/assets/imgs/hotel1.jpg',
                i*30,
            ));
        }

        this.restaurantsList = [];
        for(let i = 0; i < 10; i++ ){
            this.restaurantsList.push(new Restaurant(
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
        this.navCtrl.setRoot(Dettagliostruttura, {
            item
        });
    }

    ionViewWillEnter(){
        if(this.selectedStrutturaBefoure)
            document.getElementById(this.selectedStrutturaBefoure).scrollIntoView();
    }
}