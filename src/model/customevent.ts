export class CustomEvent{

    /*
    -> startDateTime/endDateTime
    ->
    */

    private title: string = null;
    private startDateTime: string = null;
    private endDateTime: string = null;
    private description: string = null;
    private duration: number = -1;

    /*
    preconditions:
        - startDateTime, endDateTime is an ISO string
        - duration is in seconds
    */

    constructor(title: string, startDateTime: string, endDateTime: string, description: string){
        this.title = title;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.description = description;
        this.duration = this.formatEventDuration(startDateTime, endDateTime);
    }

    getTitle(){ return this.title }
    getDescription(){ return this.description }
    getISOStartDate(){ return this.startDateTime }

    getStartingDate(){
        let start = new Date(this.startDateTime);
        let day = start.getDate();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let month = monthNames[start.getMonth()];
        return day + month;
    }


    getEndingDate(){
        let end = new Date(this.startDateTime);
        let day = end.getDate();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let month = monthNames[end.getMonth()];
        return day + month;
    }

    getTimeDuration(){
        return `${this.duration /60} minuti`;
    }

    getDaysDuration(){
        return `${this.duration /86400} giorni`;
    }

    formatEventDuration(startDT, endDT){
        let start = new Date(startDT);
        let end = new Date(endDT);
        let difference = end.getTime() - start.getTime();
        return Math.abs(difference / 1000);
    }
}