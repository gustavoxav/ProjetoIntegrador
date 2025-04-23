import { Produto } from "./produto";

export class ItemVenda {

    constructor(
        public produto:Produto,
        public quantidade:number
    ) {
    }

    subtotal(): number {
        return this.produto.preco * this.quantidade;
    }
}
