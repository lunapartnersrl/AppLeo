export class Struttura{

    private name: string;
    private address: string;
    private telNumber: string;
    private description: string;
    private imgPath: string;

    constructor(name: string, address: string, telNumber: string, description: string, imgPath: string){
        this.name = name;
        this.address = address;
        this.telNumber = telNumber;
        this.description = description;
        this.imgPath = imgPath;
    }

    getName(){
        return this.name;
    }

    getAddress(){
        return this.address;
    }

    getTelNumber(){
        return this.telNumber;
    }

    getDescription(){
        return this.description;
    }

    getImgPath(){
        return this.imgPath;
    }

}