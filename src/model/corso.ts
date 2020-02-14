
export interface Corso{
    courseId: string;
    courseTitle: string;
    courseSubtitle: string;
    courseRecipients: string;
    courseAbstract: string;
    courseNote: string;
    coursePrerequisite: string;
    courseSeats: string;
    courseTrainers: string;
    courseLink: string;

    lessonObj: any;
    lessonDate: string;
    lessonTimeStart: string;
    lessonTimeEnd: string;
    lessonLocation: string;

    catId: string;
    catShort: string;
    catTitle: string;

    tipId: string;
    tipShort: string;
    tipTitle: string;

    hqId: string;
    hqMunicipality: string;
    hqCity: string;

    color: string;
}

/*
export class Corso{
this._lessonDate = objLessons.lez_data;
        this._lessonTimeStart = objLessons.lez_orainiz;
        this._lessonTimeEnd = objLessons.lez_orafin;
        this._lessonLocation = objLessons.lez_luogo
    private _courseId: string;
    private _courseTitle: string;
    private _courseSubtitle: string;
    private _courseRecipients: string;
    private _courseAbstract: string;
    private _courseNote: string;
    private _coursePrerequisite: string;
    private _courseSeats: string;
    private _courseTrainers: string;
    private _courseLink: string;

    private _lessonObj: any;
    private _lessonDate: string;
    private _lessonTimeStart: string;
    private _lessonTimeEnd: string;
    private _lessonLocation: string;

    private _catId: string;
    private _catShort: string;
    private _catTitle: string;

    private _tipId: string;
    private _tipShort: string;
    private _tipTitle: string;

    private _hqId: string;
    private _hqMunicipality: string;
    private _hqCity: string;

    private _color: Color;

    constructor(courseId: string, courseTitle: string, courseSubTitle: string, courseRecipients:string, courseAbstract: string, courseNote: string, coursePrerequisite: string, courseSeats: string, courseTrainers: string, courseLink: string,
                lessonObj: any,
                catId: string, catShort: string, catTitle: string,
                tipId: string, tipShort: string, tipTitle: string,
                hqId: string, hqMunicipality: string, hqCity: string,
                color: string){
                    this._courseId = courseId;
                    this._courseTitle = courseTitle;
                    this._courseSubtitle = courseSubTitle;
                    this._courseRecipients = courseRecipients;
                    this._courseAbstract = courseAbstract;
                    this._courseNote = courseNote;
                    this._coursePrerequisite = coursePrerequisite;
                    this._courseSeats = courseSeats;
                    this._courseTrainers = courseTrainers;
                    this._courseLink = courseLink;

                    this._lessonObj = lessonObj;
                    this.formatLessons(lessonObj);

                    this._catId = catId;
                    this._catShort = catShort;
                    this._catTitle = catTitle;

                    this._tipId = tipId;
                    this._tipShort = tipShort;
                    this._tipTitle = tipTitle;

                    this._hqId = hqId;
                    this._hqMunicipality = hqMunicipality;
                    this._hqCity = hqCity;

                    this._color = Color[color] || Color.black;
    }
}
*/

