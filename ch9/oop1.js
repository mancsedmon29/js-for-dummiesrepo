class Beverage{
    constructor(size, temperature){
        this.size = size
        this.temperature = temperature
    }
}

class Coffee extends Beverage{
    constructor(size, temperature, hasCaffeine, howYouTakeIt){
        super(size, temperature)
        this.hasCaffeine = hasCaffeine;
        this.howYouTakeIt = howYouTakeIt;
    }

    drink(){
        if(this.temperature != 'scalding'){
            console.log('now drinking coffee');
        }
    }
}

const morningCoffee = new Coffee('64oz', 'hot', true, 'black');
console.log(morningCoffee);