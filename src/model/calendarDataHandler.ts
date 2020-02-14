import { Corso } from "./corso";

export const coursesListAtDateX = (courses: Array<Corso>, selectedDate: string) =>{
    let coursesAtSelectedDate :Array<Corso> = [];
    for(let elem of courses){
        if(elem.lessonDate === selectedDate) coursesAtSelectedDate.push(elem);
    }
    return coursesAtSelectedDate;
}