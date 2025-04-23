function intAleatorio( min, max ) {
    return min + Math.trunc( Math.random() * ( max - min + 1 ) );
}

console.log( intAleatorio( 2, 25 ) );