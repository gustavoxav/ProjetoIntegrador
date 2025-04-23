import { test } from '@playwright/test';
import { TelaVenda } from './TelaVenda.js';
import { MSG_PRODUTO_VAZIO, MSG_PRODUTO_NAO_ENCONTRADO } from '../src/mensagens.js';

test.describe( 'Venda', () => {

    /** @type {TelaVenda} */
    let tela;

    test.beforeEach(  async ({page}) => {
        tela = new TelaVenda( page );
        await tela.abrir();
    } );

    test( 'Entrar com um produto vazio deve exibir uma mensagem de erro',
        async ({page}) => {
            await tela.informarProduto( '' );
            await tela.deveMostrarMensagem( MSG_PRODUTO_VAZIO );
    } );

    test( 'Encontra um produto que existe pelo código', async ({page}) => {
        await tela.informarProduto( '888888' );
        await tela.deveMostrarMensagemContendo( 'Iogurte Desnatado 1L' );
        await tela.deveMostrarMensagemContendo( 'R$ 15' );
    } );

    test('Encontra um produto existente pelo ean13', async ({page}) => {
        await tela.informarProduto( '8888888888888' );
        await tela.deveMostrarMensagemContendo( 'Iogurte Desnatado 1L' );
        await tela.deveMostrarMensagemContendo( 'R$ 15' );
    } );

    test('Não encontra um produto', async({page}) => {
        await tela.informarProduto( '9999' );
        await tela.deveMostrarMensagem( MSG_PRODUTO_NAO_ENCONTRADO );
    })

    test('Adicionar produto sem quantidade', async({page}) => {
        await tela.informarProduto( '888888' );
        await tela.adicionarProduto();
        await tela.deveExibirNaTabela('Iogurte Desnatado 1L', 1);
    })
} );