import { CustomEvent } from "./customevent";
import { Color } from "./color";

export class Corso extends CustomEvent{

    private color: Color = Color.black;
    private address: string = null;
    private teacher: string = null;
    private classroom: string = null;

    constructor(title: string, startDateTime: string, endDateTime: string, description: string,
                    color: string, address: string, teacher: string, classroom: string){
        super(title, startDateTime, endDateTime, description);
        this.color = Color[color];
        this.address = address;
        this.classroom = classroom;
        this.teacher = teacher;
    }

    getAddress(){   return this.address }
    getClassroom(){ return this.classroom }
    getColor(){
        return Color[this.color]
    }
    getTeacher(){ return this.teacher }
}

