import { test } from '@playwright/test';
import { TelaPais } from './tela-pais';

test.describe( 'Cadastro de País', () => {

    let tela: TelaPais;

    test.beforeEach( async ({page}) => {
        tela = new TelaPais( page );
        await tela.abrir();
    } );

    test( 'Consegue realizar um cadastro com sucesso para dados válidos', async ({page}) => {
        await tela.preencherDados( { nome: 'Brasil', ddi: '+55' } );
        await tela.acionarSalvar();
        await tela.deveExibirAMensagem( 'Salvo' );
    } );

} );