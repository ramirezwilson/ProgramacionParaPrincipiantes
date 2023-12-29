export class Car {
    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    public readonly createdAt: number;
    
    constructor(brand: string , type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 123456789;
    }

    turnOn() {
        
        if (this.isRunning) {
            console.log('El crro ya estaba encendido... Se danio el motor');
            return
        }
        
        if (this.fuelTank <= 0) {
            console.log('El Carro no tiene combustib');
            return
        }
        
        this.isRunning = true;
        console.log('El carro esta encendido');
    }

    fillTank( gas: number){
        if ( gas <= 0) {
            console.log('El gas tiene que que ser positivo');
            return
        }

        let newFuelTank = this.fuelTank + gas;
        if (newFuelTank >= 100) {
            newFuelTank = 100;
        }
        this.fuelTank = newFuelTank;
    }
}

let myMazda = new Car('Mazda','Sedan');
// myMazda.brand = 'Honda';
// myMazda.type = 'Sedan';
// console.log(myMazda.createdAt); // private



console.log(myMazda);
myMazda.fillTank(50);
myMazda.fillTank(20);
//myMazda.fillTank(50);
myMazda.turnOn();
console.log(myMazda);
