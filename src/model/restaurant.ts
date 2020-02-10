import { Struttura } from "./struttura";

/*
export class Restaurant extends Struttura{

    private cucina: string;

    constructor(id: number, name: string, address: string, telNumber: string, description: string, imgPath: string, cucina: string){
        super(id, name, address, telNumber, description, imgPath);
        this.cucina = cucina;
    }

    getCucina(){
        return this.cucina;
    }

}
*/

export interface Restaurant extends Struttura{
    cucina: string;
}