import { ControladoraPais } from "./controladora-pais.js";
import { VisaoPais } from "./visao-pais.js";

export class VisaoPaisEmHTML implements VisaoPais {

    private controladora: ControladoraPais;

    constructor() {
        this.controladora = new ControladoraPais( this );
    }

    iniciar() {
        document.querySelector( '#salvar' )!
            .addEventListener( 'click', this.salvar.bind( this ) );
    }

    salvar( event ) {
        event.preventDefault();
        this.controladora.salvarPais();
    }

    dadosPais(): { nome: string, ddi: string } {
        return {
            nome: document.querySelector< HTMLInputElement >(
                '#nome' )!.value,
            ddi: document.querySelector< HTMLInputElement >(
                '#ddi' )!.value,
        };
    }

    exibirMensagens( mensagens: string[] ) {
        document.querySelector( 'output' )!.innerText =
            mensagens.join( '\n' );
    }
}