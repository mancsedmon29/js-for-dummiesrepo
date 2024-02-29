function Vehicle(speed){
    this.speed = speed;
    this.moveForward = function(){
        return `Moving forward at ${this.speed} km/h`;
    }
}

const autoMobile = new Vehicle(55);
autoMobile.wheels = 4;
autoMobile.engine = 'electric';
autoMobile.door = 4;

console.log(autoMobile);

const Truck = Object.create(autoMobile);
Truck.wheels = 6;
Truck.engine = 'diesel';
Truck.doors = 4;
Truck.hasOwnProperty('doors');
Truck.maxHaul = '1 ton';
console.log(Truck);