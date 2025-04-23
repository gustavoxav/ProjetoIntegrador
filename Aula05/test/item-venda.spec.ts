import { describe, expect, it } from 'vitest';

import { ItemVenda } from '../src/item-venda.js';
import { Produto } from '../src/produto.js';

describe( 'Item Venda', () => {

    it( 'Calcula o subtotal', async () => {
        const produto:Produto = {
            descricao:"qualquer coisa",
            preco: 2.00,
            estoque: 100,
            codigo: '777777',
            ean13: '7777777777777'
        };
        const itemVenda = new ItemVenda(produto, 3);
        expect( itemVenda.subtotal() ).toBeCloseTo( 6.00 );
    } );

} );