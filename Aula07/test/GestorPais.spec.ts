import { expect, describe, it } from "vitest";
import { GestorPais } from "../src/pais/gestor-pais";

describe( 'GestorPais', () => {

    it( 'Consegue salvar um novo país', async () => {
        const gestor = new GestorPais();
        expect( async () => {
            await gestor.salvarPais( { nome: 'Argentina', ddi: '54' } );
        } ).not.toThrow();
    } );

} );