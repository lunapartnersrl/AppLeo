import { Corso } from "./corso";
import { Color } from "./color";

const API_URL: string = 'https://iscrizioni.istruzioneer.it/api/corsi';

export async function dataLoader(){
    console.log('--> trying to insert data in courseList...');
    let coursesList: Array<Corso> = [];

    return coursesList = await fetch(API_URL)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let courses = fillCoursesList(data.data);
            console.log('...courses filled correctly with data <--');
            return courses;
        })
        .catch(err => {
            console.log('! There was are error trying to fetch the API data !');
            console.log('Try to connect to an internet source or be patient because the server is offline.');
            console.log(err);
            return null;
        });
};

/*  fill coursesList with data object getted from API   */
const fillCoursesList = (data: any) => {
    let courses: Array<Corso> = [];
    for(let key in data){
        courses.push({
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
            lessonDate: formatLessons(data[key].lezionifull, data[key].cor_id).lez_data || '2000-01-01',
            lessonTimeStart: formatLessons(data[key].lezionifull, data[key].cor_id).lez_orainiz || '00:01:00',
            lessonTimeEnd: formatLessons(data[key].lezionifull, data[key].cor_id).lez_orafin || '00:02:00',
            lessonLocation: formatLessons(data[key].lezionifull, data[key].cor_id).lez_luogo || 'Via Speranza, 4, 40068, San Lazzaro',

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
    return courses;
}

/* format the input lesson stringJson with the correct data */
const formatLessons = (lessonObj: any, id: string) => {
    try{
        //input string: take only the obj-like formatted part
        var mySubString = lessonObj.substring(
            lessonObj.lastIndexOf("[") + 1,
            lessonObj.lastIndexOf("]")
        );

        //sobstitute '' => ""
        let formattedString = mySubString.replace(/'/g, '"');

        //make it an object to access its properties
        let objLessons = JSON.parse(formattedString);

        //console.log('...lesson has been formatted correctly')
        return objLessons;
    }catch(err){
        //console.log('...error while formatting the lesson: \n');
        //console.log(`-> the bad element has id = [${id}] \n` );
        //console.log('! The element MUST be FIXED !');
        return "";
    }

}

/*  Author LRX  */