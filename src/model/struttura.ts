export class Struttura{

    private id: number;
    private name: string;
    private address: string;
    private telNumber: string;
    private description: string;
    private imgPath: string;

    constructor(id: number, name: string, address: string, telNumber: string, description: string, imgPath: string){
        this.id = id;
        this.name = name;
        this.address = address;
        this.telNumber = telNumber;
        this.description = description;
        this.imgPath = imgPath;
    }

    getId(){
        return this.id;
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