import { Struttura } from "./struttura";

export class Restaurant extends Struttura{

    cucina: string;

    constructor(name: string, address: string, telNumber: string, description: string, imgPath: string, cucina: string){
        super(name, address, telNumber, description, imgPath);
        this.cucina = cucina;
    }

    getCucina(){
        return this.cucina;
    }

}