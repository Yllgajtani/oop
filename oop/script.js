function Car(modeli, shpejtsi){
this.modeli = modeli;
this.shpejtsi = shpejtsi;
}

Car.prototype.gazi = function(){
    this.shpejtsi += 10;
    console.log("Shpejtsia aktuale e" + this.modeli + "eshte:" + this.shpejtsi)
}

Car.prototype.brake = function(){
    this.shpejtsi -= 5;
    console.log("Shpejtsia aktuale e" + this.modeli + "eshte:" + this.shpejtsi + "Km/h")
}

var makina1 = new Car("Mercedes" , 82)
var makina2 = new Car("Audi" , 18)

makina1.gazi();
makina1.gazi();