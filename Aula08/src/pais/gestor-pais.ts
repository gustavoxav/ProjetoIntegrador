import { ErroDominio } from "../infra/ErroDominio.js";
import { Pais } from "./pais.js";

export class GestorPais {

    public async salvarPais(
        { nome, ddi }: { nome: string, ddi: string }
    ): Promise< void > {
        const pais = new Pais( nome, ddi );
        const problemas = pais.validar();
        if ( problemas.length > 0 ) {
            throw ErroDominio.comProblemas( problemas );
        }
        await this.enviarPais( pais );
    }

    private async enviarPais( pais: Pais ): Promise< void > {

        // TODO: Refatorar
        const response = await fetch(
            // 'http://localhost:3000/paises',
            'http://localhost:8080/paises',
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( pais )
            }
        );
        if ( ! response.ok ) {
            throw ErroDominio.comProblemas(
                // [ 'Erro ao salvar o país. Status: ' + response.status ]
                await response.json()
            );
        }
    }
}