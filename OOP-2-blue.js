/*-------------------------*/ (proficiency project (1))
class Customer {
    constructor(amount){
      this.amount = amount;
    }
    viewDetails(){
      console.log(this.amount);
    }
  }
  
  // const hanna = new Customer(350);
  // hanna.viewDetails();
  
  class Overseas extends Customer {
    viewDetails(){
      const euros = this.amount * 0.82;
      console.log("Paid amount = " + euros + " Euros"); // Paid amount = 287 Euros
    }
  }
  
  const hans = new Overseas(350);
  hans.viewDetails();


  /*-------------------------*/ (proficiency project (2))
  class Shelter {
    constructor() {
      this.pets = []
    }
    
    addPet(pet) {
      this.pets.push(pet);
    }
  
    showAllPets() {
      for (let i = 0; i < this.pets.length; i++) {
        let currentPet = this.pets[i];
        currentPet.getInfo()
      }
    }
    
    giveAwayForAdoption() {
      for (let i = 0; i < this.pets.length; i++) {
          let currentPet = this.pets[i];
          if(currentPet.adoptionRequests > 0){ //
              console.log(currentPet.name + " found a home!"); //
              this.pets.splice(i, 1); //
            // If the pet has at least one adoption request, 
            // display a message with the pet's name followed by " found a home!".
            // Lastly, remove the pet from the array using the pets.splice(i, 1) 
            // which will remove one item at indexi.
          }
        }
      }
  }
  
  
  class Pet { 
    constructor(name, age, adoptionRequests) {
      this.name = name;
      this.age = age;
      this.adoptionRequests = adoptionRequests;
    }
  
    adopt() {
      this.adoptionRequests ++;
      console.log(this.name + " has " + this.adoptionRequests + " adoption request(s)!");
      // Mikan has 1 adoption request(s)!
      }
  }
  
  class Cat extends Pet {
    constructor(name, age, adoptionRequests) {
      super(name, age, adoptionRequests);
      this.personality = "I like playing hard to get XD";
    }
    getInfo() {
       console.log(this.name + ", " + this.age + " yo, " + this.personality);
    }
  }
  
  class Dog extends Pet {
    constructor(name, age, adoptionRequests) {
      super(name, age, adoptionRequests);
      this.personality = "I'm loyal and affectionate <3";
    }
  
    getInfo() {
      console.log(this.name + ", " + this.age + " yo, " + this.personality);
      // Marco, 10 yo, I'm loyal and affectionate <3
    }
  }

let shelter = new Shelter();
let mikan = new Cat("Mikan", 2, 0);
let marco = new Dog("Marco", 10, 0);
shelter.addPet(mikan);
shelter.addPet(marco);
shelter.showAllPets();


// 1) Increase mikan's adoption requests with the adopt() method.
// 2) Call the shelter's giveAwayForAdoption() method to iterate through pets 
// and remove those that have adoption requests.
// 3) Display current pets in the shelter instance by using showAllPets().
mikan.adopt(); // => Mikan found a home!
shelter.giveAwayForAdoption();
shelter.showAllPets();