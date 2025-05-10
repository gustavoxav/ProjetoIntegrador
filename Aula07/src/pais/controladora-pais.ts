import { ErroDominio } from '../infra/ErroDominio.js';
import { GestorPais } from './gestor-pais.js';
import { VisaoPais } from './visao-pais.js';

export class ControladoraPais {

    constructor( private visao: VisaoPais ) {
    }

    public async salvarPais() {
        const dadosPais = this.visao.dadosPais();
        const gestor = new GestorPais();
        try {
            await gestor.salvarPais( dadosPais );
            this.visao.exibirMensagens( [ 'Salvo com sucesso.' ] );
        } catch ( error ) {
            if ( error instanceof ErroDominio ) {
                this.visao.exibirMensagens( error.getProblemas() );
            } else {
                this.visao.exibirMensagens( [ error.message ] );
            }
        }
    }
}