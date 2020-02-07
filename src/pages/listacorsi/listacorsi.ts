import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Corso, formatLessons } from '../../model/corso';
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

	coursesAPIList: Corso[];

	tmpObjectDataAPIContainer: any;

	isLoading: boolean = true;
	wrongIds: string[];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		(navParams.data.title) ? this.selectedCourse = navParams.data : this.selectedCourse = null;
		this.loadData();
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

	itemIsTapped(event, item){
		this.navCtrl.setRoot(DettaglioCorso, item);
	}

	ionViewWillEnter(){
		//if(this.selectedCourse) document.getElementById(this.selectedCourse.courseTitle()).scrollIntoView();

		/*
			we do not have to reload all data -> TO FIX
		*/
	}

	loadData(){
		fetch('https://iscrizioni.istruzioneer.it/api/corsi')
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log('...trying to insert data in courseList...');
			this.fillCoursesList(data.data);
			console.log('...courses filled with data');
			this.isLoading = false;
		})
		.catch(err => {
			// catch errors
			console.log(err);
		})
	}

	fillCoursesList(data: any){
		//fill coursesList with data object getted from API

		this.customCoursesList = [];

		this.coursesAPIList = [];
		this.wrongIds = [];

		for(let key in data){
			this.coursesAPIList.push({
				courseId: data[key].cor_id,
				courseTitle: data[key].cor_titolo,
				courseSubtitle: data[key].cor_sottotitolo,
				courseRecipients: data[key].cor_destinatari,
				courseAbstract: data[key].cor_abstract,
				courseNote: data[key].cor_note,
				coursePrerequisite: data[key].cor_prerequisiti,
				courseSeats: data[key].cor_posti,
				courseTrainers: data[key].cor_formatori,
				courseLink: data[key].cor_link,

				lessonObj: data[key].lezionifull,
				lessonDate: formatLessons(data[key].lezionifull, data[key].cor_id).lez_data,
				lessonTimeStart: formatLessons(data[key].lezionifull, data[key].cor_id).lez_orainiz,
				lessonTimeEnd: formatLessons(data[key].lezionifull, data[key].cor_id).lez_orafin ,
				lessonLocation: formatLessons(data[key].lezionifull, data[key].cor_id).lez_luogo ,

				catId: data[key].cat_id ,
				catShort: data[key].cat_breve ,
				catTitle: data[key].cat_titolo ,

				tipId: data[key].tip_id ,
				tipShort: data[key].tip_breve ,
				tipTitle: data[key].tip_titolo ,

				hqId: data[key].sed_id ,
				hqMunicipality: data[key].sed_comune,
				hqCity: data[key].sed_prov ,

				color: Color[Math.floor(Math.random() * 5)] || "black"
			});
		}

		this.customCoursesList = this.coursesAPIList;

		//console log wrong formatted elemnts by id
		console.log(this.wrongIds);
	}
}
