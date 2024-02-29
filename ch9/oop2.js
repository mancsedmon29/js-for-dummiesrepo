class Cat {
    #isSleeping
    paws = 4;
    sound = 'meow';
    constructor(name, favoriteToy){
        this.name = name;
        this.favoriteToy = favoriteToy;
    }

    #takeNap(){
        this.#isSleeping = true;
    }
}