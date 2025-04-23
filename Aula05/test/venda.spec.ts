import { it, describe, expect } from 'vitest';
import { Venda } from '../src/venda.js';

describe( 'Venda', () => {

    it( 'encontra um produto existente', async () => {
        const venda = new Venda();
        const produto = await venda.buscarProduto( '888888' );
        expect( produto ).not.toBeNull();
        expect( produto?.codigo ).toBe( '888888' );
    } );

} );