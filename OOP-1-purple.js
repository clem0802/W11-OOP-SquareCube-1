/*-----------------------------*/ 2022.01.26 - OOP
/*-----------------------------*/

class Appliance {
    turnOn() {
     console.log('On');
    }
}
   
class Television extends Appliance {
    changeChannel(num) {
     console.log('Now on channel ' + num);
    }
}
   
var tv = new Television();
tv.turnOn();
tv.changeChannel(4);



/*-----------------------------*/
class Photo {
    adjustConstrast(){
        console.log("Adjusting contrast");
    }
    adjustExposure(){
        console.log("Adjusting exposure");
    }
    optimizePhoto(){
        this.adjustConstrast();
        this.adjustExposure();
    }
}
var photo = new Photo;
photo.optimizePhoto();
// Adjusting contrast
// Adjusting exposure


/*-----------------------------*/
class Person {
    greet() {
     console.log('Hello!');
    }
}
   
class Surfer extends Person {
    greet() {
     console.log('Aloha!');
    }
}
   
var surfer = new Surfer();
surfer.yell = function() {
    console.log('Watch out!')
}
surfer.greet();
// Aloha!


/*-----------------------------*/
// "molymorphism" allows use to "code many implementations for a behavior"
class Car {
    displayWarning(){
        console.log("Fuel low");
    }
    turnOnAc(){
        console.log("AC on");
    }
}

var tesla = new Car();
tesla.displayWarning = function(){
    console.log("Battery low");
}

tesla.turnOnAc(); // AC on
tesla.displayWarning(); // Battery low



/*-----------------------------*/
class  Horse {
    constructor(health) {
     this.health = health;
    }
walk(){
     console.log("Walking!");
    }
goToBarn(){
     this.walk();
    }
}
   
class Pony extends Horse {
     constructor(health){
       super(health);
    }
walk(){
    super.walk();
    }
goToBarn(){
    this.walk();
    console.log("Approaching barn");
    }
}



/*-----------------------------*/
class Bird {
    constructor(){
    }
    walk(){
        console.log("Walking!");
    }
    getToBeach(){
        this.walk;
    }
}

class Gull extends Bird {
    constructor(){
        super();
    }
    fly(){
        console.log("Flying!");
    }
    getToBeach(){
        super.getToBeach();
        this.fly();
    }
}

const penguin = new Bird();
penguin.getToBeach();
const grayGull = new Gull;
grayGull.getToBeach();
// Flying


/*-----------------------------*/
// Banking system
var customer = {
    checking: 0,
    savings: 0,
    deposit: function(amount){
      this.checking += amount;
    },
    transfer: function(amount){
      this.checking -= amount;
      this.savings += amount;
    }
  }
customer.deposit(1000);
customer.transfer(200);
console.log("Checking: " + customer.checking);
console.log("Savings: " + customer.savings);






























