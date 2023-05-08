class Person {
    constructor(name, gender) {
        this.name = name, 
        this.gender = gender;
    }
}

class Flat {
    habitant = [];
    addHabitant(Person) {
        this.habitant.push(Person);
    }
}

class House {
    flat = [];
    constructor(maxFlats) {
        this.maxFlats = maxFlats;
    }
    addFlat(flat) {
        this.flat.length < this.maxFlats ? this.flat.push(flat): console.log('Для новых хат - закончился блат!');
    }
}
  
const Person1 = new Person('Tanya', 'female');
const Person2 = new Person('Irina', 'female');
const Person3 = new Person('Kostya', 'male');
  
const flat1 = new Flat();
const flat2 = new Flat();
  
const house = new House(1);
  
flat1.addHabitant(Person1);
flat2.addHabitant(Person2);
house.addFlat(flat1);
house.addFlat(flat2);