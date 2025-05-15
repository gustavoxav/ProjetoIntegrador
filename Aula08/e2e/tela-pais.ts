import { expect, Page } from '@playwright/test';

export class TelaPais { // TODO: Refatorar para usar constantes no lugar das strings

    constructor( private page: Page ) {
    }

    async abrir() {
        await this.page.goto( 'http://localhost:5173' );
    }

    async preencherDados( dados: { nome: string, ddi: string } ) {
        await this.page.fill( '#nome', dados.nome );
        await this.page.fill( '#ddi', dados.ddi );
    }

    async acionarSalvar() {
        await this.page.click( '#salvar ' );
        await this.page.waitForResponse( 'http://localhost:8080/paises' );
    }

    async deveExibirAMensagem( mensagem: string ) {
        const conteudo = await this.page.textContent( 'output' );
        expect( conteudo?.toLowerCase() ).toContain( mensagem.toLowerCase() );
    }
}