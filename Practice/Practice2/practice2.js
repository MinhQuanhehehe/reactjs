const textbox = document.getElementById("search");
const submit = document.getElementById("submit");
const searched = document.getElementById("searched");


function Person(id, name, age, job) {
    this.id = id,
        this.name = name,
        this.age = age,
        this.job = job
}
let Persons = [];

const person1 = new Person("0001", "Quan", 20, "Boc Vac");
const person2 = new Person("0002", "Duc", 20, "SE");
const person3 = new Person("0003", "Son Tung", 22, "King of VPOP");
const person4 = new Person("0004", "Jack", 25, "Leaving Own Child");
const person5 = new Person("0005", "Thien An", 27, "Actress");
const person6 = new Person("0006", "Hai Tu", 22, "Actress");
const person7 = new Person("0007", "Hoang Dung", 23, "Composer");
const person8 = new Person("0008", "Amee", 19, "BabyShark");
const person9 = new Person("0009", "Orange", 28, "Singer");
const person10 = new Person("0010", "Phuong Ly", 30, "Singer");

Persons.push(person1);
Persons.push(person2);
Persons.push(person3);
Persons.push(person4);
Persons.push(person5);
Persons.push(person6);
Persons.push(person7);
Persons.push(person8);
Persons.push(person9);
Persons.push(person10);

function searchByName(string, callback, array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        if (array[i].name == string) {
            temp = array[i];
        }
    }
    if (temp === undefined) {
        console.log(`Khong tim dc`)
    }
    else {
        callback(temp);
    }

}

function filterAgeInRange(Person) {
    if (Person.age > 17 && Person.age < 24) {
        return true;
    }
    else {
        return false;
    }
}

function filterAgeModule3(Person) {
    if (Person.age % 3 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function print(Person) {
    console.log(Person.id);
    console.log(Person.name);
    console.log(Person.age);
    console.log(Person.job);
    
}

let string = "Quan";
string = "Duc"
searchByName(string, print, Persons);
let filteredInRange = Persons.filter(filterAgeInRange);
searchByName("Quan", print, filteredInRange);
let filteredModule3 = Persons.filter(filterAgeModule3);
console.log(filteredInRange);
console.log(filteredModule3);
