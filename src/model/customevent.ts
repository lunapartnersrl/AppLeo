export class CustomEvent{

    private title: string = null;
    private startTime: Date = null;
    private endTime: Date = null;
    private date: Date = null;
    private description: string = null;
    private duration: number = -1; //seconds

    /*
    preconditions:
        - startTime, endTime is an ISO string
        - duration is in seconds
    */

    constructor(title: string, startTime: string, endTime: string, description: string, duration: number){
        this.title = title;
        this.startTime = new Date(startTime);
        this.endTime = new Date(endTime);
        this.date = this.formatDateFromISO(startTime);
        this.description = description;
        this.duration = duration;
    }

    getTitle(){ return this.title }
    getDescription(){ return this.description }
    getDuration(){ return this.duration }

    formatDateFromISO(isoDate: string){
        let date = new Date(isoDate);
        return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
    }
}