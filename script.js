class Employee{
    constructor(name, age, salary){
        this._name = name
        this._age = age
        this._salary = salary
    }
    get name(){
        return this._name
    }
    set name(newName){
        return this._name = newName
    }
    get age(){
        return this._age 
    }
    set age(newAge){
        return this._age = newAge
    }
    get salary(){
        return this._salary 
    }
    set salary(newSalary){
        return this._salary = newSalary
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang){
        super(name, age, salary);
        this._lang = lang;
    }
    get lang(){
        return this._lang 
    }
    set lang(newLang){
        return this._lang = newLang
    }
    get salary(){
        return this._salary * 3
    }
}

const dev1 = new Programmer("John", 30, 5000,"JavaScript");

console.log(dev1);