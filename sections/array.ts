export let employees: string[] = ['Fernado', 'fermando', 'melisa'];
let salaries: number[] = [1500, 2400, 3200];

let flowers: string[] = ['Rosa', 'Girasol', 'Lirio', 'Lila'];

// console.log(people[0]);


// for (let i = 0; i < flowers.length; i++) {
    // const element = flowers[i];
    // console.log(flowers[i]);
// 
// }


for (let i = 0; i < employees.length ; i++) {
    const element = employees[i];
    console.log( employees[i] , 'tiene un salario de' , salaries[i]);

}