import { sel } from "./seletores.js";
import { exibirDetalhesProduto, adicionarNaTabela } from "./tela.js";

document.querySelector( sel.codigo )
    ?.addEventListener( 'blur', exibirDetalhesProduto );

document.querySelector( sel.botaoAdicionar )
    ?.addEventListener('click', adicionarNaTabela )