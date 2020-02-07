import { Color } from "./color";

export class Corso{

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

    formatLessons(lessonObj: any){
        console.log(lessonObj);
        //input string: take only the obj-like formatted part
        var mySubString = lessonObj.substring(
            lessonObj.lastIndexOf("[") + 1,
            lessonObj.lastIndexOf("]")
        );
        //sobstitute '' => ""
        let formattedString = mySubString.replace(/''/g,"");
        //make it an object to access its properties
        let objLessons = JSON.parse(formattedString);

        this._lessonDate = objLessons.lez_data;
        this._lessonTimeStart = objLessons.lez_orainiz;
        this._lessonTimeEnd = objLessons.lez_orafin;
        this._lessonLocation = objLessons.lez_luogo
    }

    public get courseId(): string { return this._courseId}
	public get courseTitle(): string { return this._courseTitle }
    public get courseSubtitle(): string { return this._courseSubtitle }
    public get courseRecipients(): string { return this._courseRecipients }
	public get courseAbstract(): string { return this._courseAbstract }
	public get courseNote(): string { return this._courseNote }
	public get coursePrerequisite(): string { return this._coursePrerequisite }
	public get courseSeats(): string { return this._courseSeats }
	public get courseTrainers(): string { return this._courseTrainers }
	public get courseLink(): string { return this._courseLink }

	public get lessonDate(): string { return this._lessonDate }
	public get lessonTimeStart(): string { return this._lessonTimeStart }
	public get lessonTimeEnd(): string { return this._lessonTimeEnd }
    public get lessonLocation(): string { return this._lessonLocation }

    public get catId(): string { return this._catId }
	public get catShort(): string { return this._catShort }
	public get catTitle(): string { return this._catTitle }

	public get tipId(): string { return this._tipId }
	public get tipShort(): string { return this._tipShort }
	public get tipTitle(): string { return this._tipTitle }

    public hqId(): string { return this._hqId }
    public hqMunicipality(): string { return this._hqMunicipality }
    public hqCity(): string { return this._hqCity }

    public color(): string { return Color[this._color] }

}

