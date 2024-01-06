export function max(a: number, b: number, c:number) {
    
    if (a > b ) {  
        return (a > c) ? a : c;    
    } 
    
    if (b > c) {
        return (b > a) ? b : a;
    } 
    
    return (a > c) ? a : c;
}

let maxValue = max( 111111, 112, 13);
console.log( maxValue ); 