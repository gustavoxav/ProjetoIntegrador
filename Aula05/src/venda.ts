import { MSG_CONSULTA_PRODUTO } from "./mensagens.js";
import { Produto } from "./produto.js";

const API = 'http://localhost:3000';

export class Venda {

    async buscarProduto( codigo: string ): Promise< Produto|null > {
        const response = await fetch( API + '/produtos' );
        if ( ! response.ok ) {
            throw new Error( MSG_CONSULTA_PRODUTO );
        }
        const produtos: Produto[] = await response.json();
        return produtos
            .find( p => p.codigo === codigo || p.ean13 === codigo )
            || null;
    }

    async adicionarProduto(produto: Produto, quantidade: number):Promise <void>{

    }
}