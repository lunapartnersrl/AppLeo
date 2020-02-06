import { Color } from "./color";

export class Corso{

    public courseId: string;
    public courseTitle: string;
    public courseSubtitle: string;
    public courseAbstract: string;
    public courseNote: string;
    public coursePrerequisite: string;
    public courseSeats: string;
    public courseTrainers: string;
    public courseLink: string;

    public lessonObj: any;
    public lessonDate: string;
    public lessonTimeStart: string;
    public lessonTimeEnd: string;
    public lessonLocation: string;

    public tipId: string;
    public tipBreve: string;
    public tipTitolo: string;

    public hqId: string;
    public hqMunicipality: string;
    public hqCity: string;

    public color: Color = Color.black;

    constructor(courseId: string, courseTitle: string, courseSubTitle: string, courseAbstract: string, courseNote: string, coursePrerequisite: string, courseSeats: string, courseTrainers: string, courseLink: string,
                lessonObj: any,
                tipId: string, tipBreve: string, tipTitolo: string,
                hqId: string, hqMunicipality: string, hqCity: string){
                    this.courseId = courseId;
                    this.courseTitle = courseTitle;
                    this.courseSubtitle = courseSubTitle;
                    this.courseAbstract = courseAbstract;
                    this.courseNote = courseNote;
                    this.coursePrerequisite = coursePrerequisite;
                    this.courseSeats = courseSeats;
                    this.courseTrainers = courseTrainers;
                    this.courseLink = courseLink;
                    this.lessonObj = lessonObj;
                    this.tipId = tipId;
                    this.tipBreve = tipBreve;
                    this.tipTitolo = tipTitolo;
                    this.hqId = hqId;
                    this.hqMunicipality = hqMunicipality;
                    this.hqCity = hqCity;

                    this.formatLessons(lessonObj);
    }

    formatLessons(lessonObj: any){
        //input string: take only the obj-like formatted part
        var mySubString = lessonObj.substring(
            lessonObj.lastIndexOf("[") + 1,
            lessonObj.lastIndexOf("]")
        );

        //sobstitute '' => ""

        //correct formatted string
        var str_lez = '{"lez_data":"2018-11-15","lez_orainiz":"16:15:00","lez_orafin":"19:15:00","lez_luogo":"NOVAFELTRIA A. BATTELLI - VIA DELLA MATERNITA, 43 NOVAFELTRIA RN"}';

        //
        let objLessons = JSON.parse(str_lez);
        this.lessonDate = objLessons.lez_data;
        this.lessonTimeStart = objLessons.lez_orainiz;
        this.lessonTimeEnd = objLessons.lez_orafin;
        this.lessonLocation = objLessons.lez_luogo
    }



}

