export interface Person {
    name: string;
    age: Number;
    isActive: boolean;
}


let fernando: Person = {
    name: 'Fermando',
    age: 36,
    isActive: true
}

let melissa: Person = {
    name: 'Melissa',
    age: 30,
    isActive: false
}

let juan: Person = {
    name: 'Juan',
    age: 42,
    isActive: false
}

let people: Person[] = [ fernando , melissa , juan ]
for (let i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(person.name + ' ' + person.age);
}

