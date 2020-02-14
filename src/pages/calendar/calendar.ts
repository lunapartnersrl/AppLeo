import {Component, Inject, LOCALE_ID, ViewChild} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {CalendarComponent} from "ionic2-calendar/calendar";
import * as moment from "moment";
import { Corso } from '../../model/corso';
import { dataLoader } from '../../model/dataLoader';
/**
* Generated class for the CalendarPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
	selector: 'page-calendar',
	templateUrl: 'calendar.html',
})
export class CalendarPage {

	coursesAPIData: Array<Corso>;

	eventSource;
	viewTitle;
	calendar = {
		noEventsLabel: 'Nessun evento',
		mode: 'month',
		currentDate: moment().toDate(),
		currentSection: moment().format('MMMM'),
		locale: this.locale
	};

	@ViewChild(CalendarComponent) myCal: CalendarComponent;

	constructor(public navCtrl: NavController, @Inject(LOCALE_ID) private locale:string) {
		this.eventSource = [];

		/* Load courses data from external module created <dataLoader> */
		dataLoader()
			.then((loadedCourses)=> {
				console.log(loadedCourses);
				this.coursesAPIData = loadedCourses;
				console.log(this.coursesAPIData);
			})
			.then(()=>{
				this.eventSource = this.eventSourceLoader();
			});
	}


	// Change current month/week/day
	next() {
		var swiper = document.querySelector('.swiper-container')['swiper'];
		swiper.slideNext();
	}

	back() {
		var swiper = document.querySelector('.swiper-container')['swiper'];
		swiper.slidePrev();
	}

	// Change between month/week/day
	changeMode(mode) {
		this.calendar.mode = mode;
	}

	// Focus today
	today() {
		this.calendar.currentDate = moment().toDate();
	}

	getTodayString(){
		return moment(this.calendar.currentDate).format('ll');
	}

	// Selected date reange and hence title changed
	onViewTitleChanged(title) {
		this.viewTitle = title;
	}

	// Calendar event was clicked
	async onEventSelected(event) {
		console.log('You selected the event: -->');
		console.log(event);
	}

	// Time slot was clicked
	onTimeSelected(ev) {
		console.log('time has been selected');
	}

	loadEvents() {
		this.eventSource = this.eventSourceLoader();
		console.log('events are loaded into the calendar');
	}

	onCurrentDateChanged = (ev: Date) => {
		console.log('selected date: ' + ev);
	}

	eventSourceLoader(){
		let events = [];
		for(let elem of this.coursesAPIData){
			events.push({
				title: elem.courseTitle,
				startTime: new Date(moment(`${elem.lessonDate} ${elem.lessonTimeStart}`).format()),
				endTime: new Date(moment(`${elem.lessonDate} ${elem.lessonTimeEnd}`).format()),
				allDay: false
			});
		}
		console.log(events);
		return events;
	}

}
