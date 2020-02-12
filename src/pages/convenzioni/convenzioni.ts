import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Hotel } from '../../model/hotel';
import { Restaurant } from '../../model/restaurant';
import { Dettagliostruttura } from '../dettagliostruttura/dettagliostruttura';

@Component({
    selector: 'page-convenzioni',
    templateUrl: 'convenzioni.html'
  })

export class Convenzioni{

    selectedConv: string = 'hotels';
    hotelsList: Array<Hotel>;
    restaurantsList: Array<Restaurant>;

    modal: any = null;

    constructor(public modalCtrl: ModalController){
        this.hotelsList = [];
        for(let i = 0; i < 10; i++ ){
            this.hotelsList.push({
                id: 100 + i,
                name: `Hotel${i}`,
                address: `Via indirizzo, ${i + 20}`,
                telNumber: `333 ${i}${i%2} ${i}4 560`,
                description: `descrizione`,
                imgPath: '/assets/imgs/hotel1.jpg',
                price: i*30,
            });
        }

        this.restaurantsList = [];
        for(let i = 0; i < 10; i++ ){
            this.restaurantsList.push({
                id: 200 + i,
                name: `Ristorante${i}`,
                address: `Via indirizzo, ${i + 20}`,
                telNumber: `333 ${i}${i%2} ${i}4 560`,
                description: `descrizione`,
                imgPath: '/assets/imgs/hotel1.jpg',
                cucina: 'mediterranea',
            });
        }
    }

    openModal(item){
        this.modal = this.modalCtrl.create(Dettagliostruttura, item);
        this.modal.present();
        this.modal.onDidDismiss( () => this.modal = null);
    }
}