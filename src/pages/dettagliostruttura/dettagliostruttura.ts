import {
	GoogleMaps,
	GoogleMap,
	GoogleMapsEvent,
	GoogleMapOptions,
	CameraPosition,
	MarkerOptions,
	Marker,
	Environment
} from '@ionic-native/google-maps';
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
	map: GoogleMap;

    constructor(public navCtrl: NavController, public navParams: NavParams){
		this.hotel =  null;
		this.restaurant = null;
		let inputItem: any = navParams.get('item');
		'price' in inputItem ? this.hotel = inputItem : this.restaurant = inputItem;
		this.struttura = this.hotel ? this.hotel : this.restaurant;
    }

	
	ionViewDidLoad() {
		this.loadMap();
	}

	loadMap() {
		
		/* precondition to access location =>
			A.the object hotel/restaurant will also have a property
			location:{lat: x, lng: y}
			so we can access it with:
			this.hotel.getLng() and this.hotel.getLat()
			B. if we have only the address we have to do the geolocation
			of it, to get the lat, lng from the address
		*/

		Environment.setEnv({
			'API_KEY_FOR_BROWSER_RELEASE': '',
			'API_KEY_FOR_BROWSER_DEBUG': ''
		});

		let mapOptions: GoogleMapOptions = {
			camera: {
				target: {
					lat: 43.0741904,
					lng: -89.3809802
				},
					zoom: 18,
					tilt: 30
			}
		};
		this.map = GoogleMaps.create('map_canvas', mapOptions);

		let marker: Marker = this.map.addMarkerSync({
			title: 'larix',
			icon: 'blue',
			animation: 'DROP',
			position: {
				lat: 43.0741904,
				lng: -89.3809802
			}
		});

	}

    backToConvenzioni(event, selectedConv, itemName){
        this.navCtrl.setRoot(Convenzioni, {
            selectedConv: this.hotel ? 'hotels' : 'restaurants',
            itemName: this.hotel ? this.hotel.getName() : this.restaurant.getName(),
        });
	}
}
