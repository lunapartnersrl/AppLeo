import * as moment from "moment";

export class CalendarEvent {
  private _title: string
  private _descr: string
  private _startDate: any
  private _endDate: any
  private _allDay: boolean
  private _startTime: any
  private _endTime: any


  constructor(title: string = '',
              descr: string = '',
              startDate = moment().format(),
              endDate = moment().format(),
              allDay: boolean = false,
              startTime = moment().format(),
              endTime = moment().format()) {
    this._title = title;
    this._descr = descr;
    this._startDate = startDate;
    this._endDate = endDate;
    this._allDay = allDay;
    this._startTime = startTime;
    this._endTime = endTime;
  }

  public createEventCopy = function(): CalendarEvent {
    return Object.create(this)
  }

  get startTime(): any {
    return this._startTime;
  }

  set startTime(value: any) {
    this._startTime = value;
  }

  get endTime(): any {
    return this._endTime;
  }

  set endTime(value: any) {
    this._endTime = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get descr(): string {
    return this._descr;
  }

  set descr(value: string) {
    this._descr = value;
  }

  get startDate(){
    return this._startDate;
  }

  set startDate(value) {
    this._startDate = value;
  }

  get endDate(){
    return this._endDate;
  }

  set endDate(value) {
    this._endDate = value;
  }

  get allDay(): boolean {
    return this._allDay;
  }

  set allDay(value: boolean) {
    this._allDay = value;
  }
}