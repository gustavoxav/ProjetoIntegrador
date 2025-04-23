import { expect } from '@playwright/test';
import { sel } from '../src/seletores.js';

export class TelaVenda {

    /** @type {import('@playwright/test').Page} */
    #page;

    constructor( page ) {
        this.#page = page;
    }

    async abrir() {
        this.#page.goto( 'http://localhost:5174' ); // TODO: refatorar
    }

    async informarProduto( codigo ) {
        await this.#page.fill( sel.codigo, codigo );
        await this.#page.keyboard.press("Tab");
        // await this.#page.click( sel.botaoAdicionar );
    }

    async deveMostrarMensagem( mensagem ) {
        const texto = await this.#page.innerText( sel.detalhes );
        expect( texto ).toBe( mensagem );
    }

    async deveMostrarMensagemContendo( texto ) {
        const detalhes = await this.#page.innerText( sel.detalhes );
        expect( detalhes ).toContain( texto );
    }

    async adicionarProduto(){

        await this.#page.click( sel.botaoAdicionar );

    }

    async deveExibirNaTabela(descricao, indice){
        const texto = await this.#page.locator(`tbody tr:nth-child(${indice})`).innerText();
        expect(texto).toContain(descricao);
    }
}