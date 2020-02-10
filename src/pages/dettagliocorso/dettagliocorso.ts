import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Corso } from '../../model/corso';
import { ListaCorsi } from '../listacorsi/listacorsi';

@Component({
    selector: 'page-dettagliocorso',
    templateUrl: 'dettagliocorso.html'
})

export class DettaglioCorso{
    corso: Corso = null;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams){
        console.log(navParams.data);
        this.corso = navParams.data;
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }



}