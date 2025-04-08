export function somar( x, y ) {
    return x + y;
}

export function dividir( x, y ) {
    if ( y === 0 ) {
        throw new Error( 'O denominador não pode ser zero.' );
    }
    return x / y;
}
