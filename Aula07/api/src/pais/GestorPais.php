<?php

class GestorPais {

    public function __construct(
        private RepositorioPais $repositorioPais
    ) {
    }

    /**
     * Salva um país
     *
     * @param array<string, string> $dados
     * @return void
     */
    public function salvarPais( array $dados ): void {
        $nome = $dados[ 'nome' ] ?? '';
        $ddi = $dados[ 'ddi' ] ?? '';
        $pais = new Pais( 0, $nome, $ddi );
        $problemas = $pais->validar();
        if ( count( $problemas ) > 0 ) {
            throw DominioException::com( $problemas );
        }
        $this->repositorioPais->adicionar( $pais );
    }
}