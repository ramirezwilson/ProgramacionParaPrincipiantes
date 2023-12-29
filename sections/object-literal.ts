export let person  = {
    name: 'juan',
    age: 30,
    isActive: true,
    hobbies: ['soccer', 'baseball'],
    toString (){
        let objectSting = this.name + ' ' + this.age + ' ' + this.hobbies       
        console.log(objectSting);
    } 
}

// console.log(person);
// person.toString();   

let car = {
    color: 'red',
    brand:  'toyota',
    year: 2023,
    doors: 5,
    gearBox: 'automatic'
}

let smartTv = {
    brand: 'samsung',
    sizeInches: 50,
    year: 2015,
    type: 'led',
    version: 'HZ32UL'
}

let youtubeVideo = {
    length: 120,
    author: 'Wilson Ramirez',
    Comment: [ 'gracias',' muy bueno el contenido'],
    likes: 3500,
    dislikes: 500,
    format: 'mp4'
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);
