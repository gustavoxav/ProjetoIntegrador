import { expect, Page } from '@playwright/test';

export class TelaPais {

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
    }

    async deveExibirAMensagem( mensagem: string ) {
        const conteudo = await this.page.textContent( 'output' );
        expect( conteudo?.toLowerCase() ).toContain( mensagem.toLowerCase() );
    }
}