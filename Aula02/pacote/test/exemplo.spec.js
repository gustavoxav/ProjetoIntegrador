import { describe, it, expect } from 'vitest';
import { dividir, somar } from '../src/soma.js';

// Crie uma função dividir e crie um teste para ela.

describe( somar.name, () => {

    it( 'retorna um número positivo ao somar dois positivos', () => {
        const resultado = somar( 10, 20 );
        expect( resultado ).toBe( 30 );
    } );

    it( 'retorna a soma de dois números com casas decimais', () => {
        const resultado = somar( 0.1, 0.2 );
        expect( resultado ).toBeCloseTo( 0.3, 5 );
    } );

} );


describe( dividir.name, () => {

    it( 'realiza divisão simples', () => {
        const resultado = dividir( 4, 2 );
        expect( resultado ).toBeCloseTo( 2 );
    } );

    it( 'lança exceção ao dividir por zero', () => {
        expect( () => {
            dividir( 2, 0 );
        } ).toThrow( /zero/i );
    } );
} );