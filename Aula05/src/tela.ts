import { MSG_PRODUTO_NAO_ENCONTRADO, MSG_PRODUTO_VAZIO } from './mensagens.js';
import { Produto } from './produto.js';
import { sel } from './seletores.js';
import { Venda } from './venda.js';

export async function exibirDetalhesProduto( event ) {

    const codigo: string = document.querySelector<HTMLInputElement>(
        sel.codigo )!.value;

    if ( codigo?.length < 1 ) {
        exibirDetalhes( MSG_PRODUTO_VAZIO );
        return;
    }

    const venda = new Venda();
    try {
        const produto = await venda.buscarProduto( codigo );
        if ( produto ) {
            exibirDetalhes(
                formatarProdutoParaMensagem( produto )
            );
        } else {
            exibirDetalhes( MSG_PRODUTO_NAO_ENCONTRADO )
        }
    } catch ( erro ) {
        exibirDetalhes( erro.message );
    }
}

function formatarProdutoParaMensagem( p: Produto ): string {
    return `${p.descricao} - R$ ${p.preco}`;
}

function exibirDetalhes( mensagem: string ): void {
    document.querySelector( sel.detalhes )!.textContent = mensagem;
}

export function adicionarNaTabela(event){

}