import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Corso } from '../../model/corso';

@Component({
  selector: 'page-listacorsi',
  templateUrl: 'listacorsi.html',
})
export class ListaCorsi {


  coursesList: Array<Corso>;
  searchCourseValue: string = "";
  customCoursesList: Array<Corso>;

  constructor(public navCtrl: NavController) {
    this.coursesList = [];
    for(let i = 3; i > 0; i--){
      this.coursesList.push(new Corso(
        `Titolo ${i} `,
        `2020-02-04T10:0${i}:35.652Z`,
        `2020-02-05T10:0${i + 1}:35.652Z`,
        'descrizione',
        'red',
        `via Indirizzo, ${i}`,
        'prof.',
        'Aula A2'
      ));
    }
    this.customCoursesList = this.coursesList;
    console.log(this.coursesList);
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

}
