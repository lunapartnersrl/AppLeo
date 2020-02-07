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

	coursesAPIList: Array<Corso>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		(navParams.data.title) ? this.selectedCourse = navParams.data : this.selectedCourse = null;
		this.loadData();
	}

	orderByDate(){
		/*
		this.customCoursesList = this.coursesList;
		this.customCoursesList.sort((a, b) =>{
				let dateA = new Date(a.getISOStartDate());
				let dateB = new Date(b.getISOStartDate());
				if(dateA < dateB) return -1;
				if(dateB > dateB) return 1;
				return 0;
		});
		console.log(this.customCoursesList);
		*/
	}

	orderByTitle(){
		/*
		this.customCoursesList = this.coursesList;
		this.customCoursesList.sort((a, b) =>{
			if(a.getTitle() < b.getTitle()) return -1;
			if(a.getTitle() > b.getTitle()) return 1;
			return 0;
		});
		console.log(this.customCoursesList);
		*/
	}

	onSearchInputChange(){
		/*
		let tmp = [];
		for(let elem of this.coursesList){
			let title = elem.getTitle();
			if(title.includes(this.searchCourseValue)){
				tmp.push(elem);
			}
		}
		console.log(this.customCoursesList);
		this.customCoursesList = tmp;
		*/
	}

	itemIsTapped(event, item){
		this.navCtrl.setRoot(DettaglioCorso, item);
	}

	ionViewWillEnter(){
		//if(this.selectedCourse) document.getElementById(this.selectedCourse.courseTitle()).scrollIntoView();
	}

	loadData(){
		fetch('https://iscrizioni.istruzioneer.it/api/corsi')
			.then(response => {
				return response.json()
			})
			.then(data => {
				console.log(data.data);
				this.fillCoursesList(data.data);
			})
			.catch(err => {
				// catch errors
				console.log(err);
			})
	}

	fillCoursesList(data: any){
		//fill coursesList with data object getted from API
		this.coursesAPIList = [];
		for(let key in data){
			this.coursesAPIList.push(new Corso(
				data.cor_id,
				data.cor_titolo,
				data.cor_sottotitolo,
				data.cor_destinatari,
				data.cor_abstract,
				data.cor_note,
				data.cor_prerequisiti,
				data.cor_posti,
				data.cor_formatori,
				data.cor_link,
				data.lezionifull,
				data.cat_id,
				data.cat_breve,
				data.cat_titolo,
				data.tip_id,
				data.tip_breve,
				data.tip_titolo,
				data.sed_id,
				data.sed_comune,
				data.sed_prov,
				Color[Math.floor(Math.random() * 5)]
			));
		}

		console.log(this.coursesAPIList);
		this.customCoursesList = this.coursesAPIList;
	}

}
