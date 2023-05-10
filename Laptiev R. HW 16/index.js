class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.birthYear = birthYear,
        this.grades = [],
        this.visitList = new Array(25)
    }
    
    getStudentAge(){
        this.birthYear = new Date().getFullYear() - this.birthYear;
        return console.log(`${this.firstName} ${this.lastName} is ${this.birthYear} years.`)
    }
    
    present(){
        this.visitList.shift();
        this.visitList.push(true);
    }
    
    absent(){
        this.visitList.shift();
        this.visitList.push(false);
    }
    // можно сделать через lastIndexOf, но тогда придется делать fill массива и вводить новую переменную, и тогда получится ограниченный массив, а не как здесь зацикленный.
    // Но по условию пустой массив, то есть без определения пустых ячеек. Это пример через lastIndexOf, ну и добавить .fill(0) после Arrey(25).
    // present(){
    //   const lastItem = this.visitList.lastIndexOf(0);
    //     if(lastItem !== -1){
    //       this.visitList[lastItem] = true; в present() - (false);
    //     }
    //   }
    summary(){
        let averageGrades = 
            this.grades.reduce((acc, curr) => acc + curr, 0) / this.grades.length;
      
        let averageAttendance = 
            this.visitList.filter(item => item === true).length/this.visitList.filter(item => String(item)).length;
  
        if (averageGrades >= 90 && averageAttendance >= 0.9) {
            return console.log(`${this.firstName} ${this.lastName} you're a monster of study!!!`);
        } else if (averageGrades >= 90 || averageAttendance >= 0.9) {
            return console.log(`${this.firstName} ${this.lastName}, next time you will be better!!!`);
        } else {
            return console.log(`${this.firstName} ${this.lastName}, I don't want to speak with you!!!`);
        }
    }
}
  
let student1 = new Student('Rulik', 'Tapok', 1989);
let student2 = new Student('Sonya', 'Metla', 2000);
let student3 = new Student('Igorёk', 'Drozd', 1995);
  
student1.getStudentAge();
student2.getStudentAge();
student3.getStudentAge();
  
student1.grades.push(99, 95, 100, 89, 98, 100,);
student2.grades.push(78, 99, 100, 88, 95, 100,);
student3.grades.push(65, 23, 80, 55, 88, 79,);
  
student1.present();student1.present();student1.present();student1.present();student1.present();student1.present();
student2.present();student2.absent();student2.absent();student2.present();student2.absent();student2.present();
student3.present();student3.absent();student3.absent();student3.present();student3.absent();student3.present();
  
console.log(student1)
console.log(student2)
console.log(student3)
  
student1.summary();
student2.summary();
student3.summary();