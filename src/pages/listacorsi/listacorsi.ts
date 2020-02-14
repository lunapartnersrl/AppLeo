import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Corso } from '../../model/corso';
import { DettaglioCorso } from '../dettagliocorso/dettagliocorso';
import { Color } from '../../model/color';
import { dataLoader } from '../../model/dataLoader';

@Component({
	selector: 'page-listacorsi',
	templateUrl: 'listacorsi.html',
})
export class ListaCorsi {

	coursesList: Array<Corso>;
	searchCourseValue: string = "";
	customCoursesList: Array<Corso>;
	selectedCourse: Corso;

	coursesAPIList: Array<Corso>;

	tmpObjectDataAPIContainer: any;

	isLoading: boolean = true;

	modal: any = null;

	constructor(public modalCtrl: ModalController) {
		dataLoader().then((loadedCourses)=> {
			this.customCoursesList = loadedCourses;
			this.coursesAPIList = loadedCourses;
			this.isLoading = false;
		});
	}

	orderByDate(){
		this.customCoursesList = this.coursesAPIList;
		this.customCoursesList.sort((a, b) =>{
				let dateA = new Date(a.lessonDate);
				let dateB = new Date(b.lessonDate);
				if(dateA < dateB) return -1;
				if(dateB > dateB) return 1;
				return 0;
		});
	}

	orderByTitle(){
		this.customCoursesList = this.coursesAPIList;
		this.customCoursesList.sort((a, b) =>{
			if(a.courseTitle < b.courseTitle) return -1;
			if(a.courseTitle > b.courseTitle) return 1;
			return 0;
		});
	}

	onSearchInputChange(){
		let tmp = [];
		for(let elem of this.coursesAPIList){
			let title = elem.courseTitle;
			if(title.includes(this.searchCourseValue)){
				tmp.push(elem);
			}
		}
		this.customCoursesList = tmp;
	}

	itemIsTapped(item){
		this.modal = this.modalCtrl.create(DettaglioCorso, item);
		this.modal.present();
		this.modal.onDidDismiss( () => this.modal = null);
	}
}
