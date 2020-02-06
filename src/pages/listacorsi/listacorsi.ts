import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Corso } from '../../model/corso';
import { DettaglioCorso } from '../dettagliocorso/dettagliocorso';
import { Color } from '../../model/color';

@Component({
  selector: 'page-listacorsi',
  templateUrl: 'listacorsi.html',
})
export class ListaCorsi {

  coursesList: Array<Corso>;
  searchCourseValue: string = "";
  customCoursesList: Array<Corso>;
  selectedCourse: Corso;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    (navParams.data.title) ? this.selectedCourse = navParams.data : this.selectedCourse = null;
    this.coursesList = [];
    for(let i = 10; i > 0; i--){
      let randomColor = Color[Math.floor(Math.random() * 5)];
      this.coursesList.push(new Corso(
        `Titolo ${i} `,
        `2020-02-04T10:0${i}:35.652Z`,
        `2020-02-05T10:0${i + 1}:35.652Z`,
        'descrizione',
        randomColor,
        `via Indirizzo, ${i}`,
        'prof. Marco Rossi',
        'Aula A2'
      ));
    }
    this.customCoursesList = this.coursesList;
  }

  orderByDate(){
    this.customCoursesList = this.coursesList;
    this.customCoursesList.sort((a, b) =>{
        let dateA = new Date(a.getISOStartDate());
        let dateB = new Date(b.getISOStartDate());
        if(dateA < dateB) return -1;
        if(dateB > dateB) return 1;
        return 0;
    });
    console.log(this.customCoursesList);
  }

  orderByTitle(){
    this.customCoursesList = this.coursesList;
    this.customCoursesList.sort((a, b) =>{
      if(a.getTitle() < b.getTitle()) return -1;
      if(a.getTitle() > b.getTitle()) return 1;
      return 0;
    });
    console.log(this.customCoursesList);
  }

  onSearchInputChange(){
    let tmp = [];
    for(let elem of this.coursesList){
      let title = elem.getTitle();
      if(title.includes(this.searchCourseValue)){
        tmp.push(elem);
      }
    }
    console.log(this.customCoursesList);
    this.customCoursesList = tmp;
  }

  itemIsTapped(event, item){
    this.navCtrl.setRoot(DettaglioCorso, item);
  }

  ionViewWillEnter(){
    if(this.selectedCourse){
        console.log('there is a course');
        document.getElementById(this.selectedCourse.getTitle()).scrollIntoView();
    }
  }
}
