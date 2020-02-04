import { CustomEvent } from "./customevent";
import { Color } from "./color";

export class Corso extends CustomEvent{

    private color: Color = Color.black;
    private address: string = null;
    private teacher: string = null;
    private classroom: string = null;

    constructor(title: string, startTime: string, endTime: string, description: string, duration: number, color: string, address: string, teacher: string, classroom: string){
        super(title, startTime, endTime, description, duration);
        this.color = Color[color];
        this.address = address;
        this.classroom = classroom;
    }

    getAddress(){   return this.address }
    getClassroom(){ return this.classroom }
}

