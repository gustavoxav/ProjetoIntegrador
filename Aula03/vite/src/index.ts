import { Calculadora, Operacao } from './calculadora.js';

document.addEventListener( 'DOMContentLoaded', () => {
    document.querySelector( '#calcular' )
        ?.addEventListener( 'click', calcular );
} );

function calcular( event: Event ): void  {
    event.preventDefault();

    const n1 = Number( document.querySelector< HTMLInputElement >(
        '#n1' )?.value );
    const n2 = Number( document.querySelector< HTMLInputElement >(
        '#n2' )?.value );
    const op = document.querySelector< HTMLSelectElement >(
        '#op' )?.value;

    const calculadora = new Calculadora();
    const resultado = calculadora.calcular( n1, n2, op as Operacao );

    const output = document.querySelector< HTMLOutputElement >(
        'output' );
    // if ( output ) {
    //     output.innerText = resultado.toString();
    // }
    output!.innerText = resultado.toString();
}