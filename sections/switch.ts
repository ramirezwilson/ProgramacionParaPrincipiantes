export let weekDay:number = -4;

if (weekDay <= 0) {
    throw new Error('Dia de la semana no permitido');
}

switch ( weekDay ) {
    case 1:
        console.log('Es lunes');
        break;
    case 2:
        console.log('Es martes');
    case 3:
        console.log('Es miercoles');
    default:
        console.log("no es lunes, martes o miercoles");
        break;
}