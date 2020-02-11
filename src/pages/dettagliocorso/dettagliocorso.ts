import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Corso } from '../../model/corso';

@Component({
    selector: 'page-dettagliocorso',
    templateUrl: 'dettagliocorso.html'
})

export class DettaglioCorso{
    corso: Corso = null;

    inputValueName: string = "";
    inputValueEmail: string = "";
    inputValueTel: string = "";
    inputValueMoreInfo: string = "";

    warningName: string = "";
    warningEmail: string = "";
    warningTel: string = "";

    constructor(public viewCtrl: ViewController, public navParams: NavParams){
        console.log(navParams.data);
        this.corso = navParams.data;
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }

    formIsValid(): boolean{
        console.log('Checking your form data...');

        if(!this.inputValueName){
            console.log('Please insert a name');
            /* Add user output */
            this.warningName = "Please insert a Name";
            return false;
        }
        this.warningName = "";

        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(String(this.inputValueEmail).toLowerCase())){
            console.log('wrong email format');
            /* Add user output */
            this.warningEmail = "Please insert a correct email";
            return false;
        }
        this.warningEmail = "";

        if(!this.inputValueTel){
            console.log('Please insert your phone number');
            /* Add user output */
            this.warningTel = "Please insert a correct phone number";
            return false;
        }
        this.warningTel = "";

        console.log('...the form is valid');
        return true;
    }

    submitForm(){
        if(this.formIsValid()){

            /* prepare data strucure for email sending */
            let formData = {
                subject: `Submitted form from course [${this.corso.courseId}] ${this.corso.courseTitle}`,
                content: `
                    Name: ${this.inputValueName} \n
                    Email: ${this.inputValueEmail} \n
                    Tel: ${this.inputValueTel} \n
                    More information: ${this.inputValueMoreInfo} \n
                `,
                from: '',
                to: ''
            };

            /* send information to server */
            /* TO-DO */
        }

    }
}