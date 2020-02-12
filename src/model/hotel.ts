import { Struttura } from "./struttura";

/*
export class Hotel extends Struttura{

    private price: number;

    constructor(id: number, name: string, address: string, telNumber: string, description: string, imgPath: string, price: number){
        super(id, name, address, telNumber, description, imgPath);
        this.price = price;
    }

    getFormattedPrice(){
        return `${this.price} $ a notte`
    }

}
*/

export interface Hotel extends Struttura{
    price: number;
}