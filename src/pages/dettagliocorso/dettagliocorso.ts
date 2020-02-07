import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Corso } from '../../model/corso';
import { ListaCorsi } from '../listacorsi/listacorsi';

@Component({
    selector: 'page-dettagliocorso',
    templateUrl: 'dettagliocorso.html'
})

export class DettaglioCorso{
    corso: Corso = null;

    constructor(public navCtrl: NavController, public navParams: NavParams){
        console.log(navParams.data);
        this.corso = navParams.data;
    }

    backToListaCorsi(){
        this.navCtrl.setRoot(ListaCorsi, this.corso);
    }
}