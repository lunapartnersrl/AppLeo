import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Hotel } from '../../model/hotel';
import { Restaurant } from '../../model/restaurant';
import { Convenzioni } from '../convenzioni/convenzioni';

@Component({
	selector: 'page-dettagliostruttura',
	templateUrl: 'dettagliostruttura.html',
})
export class Dettagliostruttura {

	hotel: Hotel;
	restaurant: Restaurant;
	struttura: any;

    constructor(public navCtrl: NavController, public navParams: NavParams){
		this.hotel =  null;
		this.restaurant = null;
		let inputItem: any = navParams.get('item');
		'price' in inputItem ? this.hotel = inputItem : this.restaurant = inputItem;
		this.struttura = this.hotel ? this.hotel : this.restaurant;
    }

    backToConvenzioni(event, selectedConv, itemName){
        this.navCtrl.setRoot(Convenzioni, {
            selectedConv: this.hotel ? 'hotels' : 'restaurants',
            itemName: this.hotel ? this.hotel.getName() : this.restaurant.getName(),
        });
	}
}
