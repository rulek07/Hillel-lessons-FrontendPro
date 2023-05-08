class Driver {
    constructor(name, age) {
        this.name = name,
        this.age = age;
    }
    showDriver() {
        console.log(`Drivers name is ${this.name}, age ${this.age} years old.`);
    };
};
  
class Auto {
    constructor(brand, model, registrationYear, numberPlate, prefecture) {
        this.brand = brand,
        this.model = model,
        this.registrationYear = registrationYear,
        this.numberPlate = numberPlate,
        this.prefecture = prefecture,
        this.autoOwner = null;
    };
    addOwner(owner) {
        owner.age >= 18 ? (this.autoOwner = owner) :
        console.log(`${owner.name} is an illegal driver.`);
    };
    showAuto() {
        console.log(`${this.autoOwner} is the owner of ${this.brand} ${this.model}.`)
    
    this.autoOwner ? null : console.log(`The owner of ${this.brand} was arrested.`);
    };
};
  
const Driver1 = new Driver('Sota', '31');
const Driver2 = new Driver('Haruky', '25');
const Driver3 = new Driver('Itsuki', '17');

const auto1 = new Auto('Toyota', 'Supra', '1999', '京都76-54', 'Kyoto');
const auto2 = new Auto('Nissan', 'GT-R', '2000', '三重23-45', 'Nagasaki');
const auto3 = new Auto('Honda', 'NSX', '2005', '鈴鹿09-87', 'Osaka');

auto1.addOwner(Driver1);
auto2.addOwner(Driver2);
auto3.addOwner(Driver3);

Driver1.showDriver();
Driver2.showDriver();
Driver3.showDriver();

auto1.showAuto();
auto2.showAuto();
auto3.showAuto();