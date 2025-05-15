<?php
// Esse arquivo não faz parte da API e apenas
// explica como usar transações em classes do modelo

// FORMA 1 -----------------------------------------------------

interface Transacao {

    public function iniciar();
    public function finalizar();
    public function desfazer();

}

class TransacaoComPDO implements Transacao {

    public function __construct( private PDO $pdo ) {}
    // TODO: implementar métodos
}

// FORMA 2 -----------------------------------------------------

interface UnidadeTransacional {

    public function executar( callable $f );
}

class UnidadeTransacionalComPDO implements UnidadeTransacional {
    public function __construct( private PDO $pdo ) {
    }

    public function executar( callable $f ) {
        try {
            $this->pdo->beginTransaction();
            $f();
            $this->pdo->commit();
        } catch ( Exception $e ) {
            $this->pdo->rollBack();
            throw $e;
        }
    }
}

// EXEMPLO DE USO -----------------------------------------------------


class GestorProducao {

    public function __construct(
        private RepositorioProducao $repositorioProducao,
        private RepositorioEtapasProducao $repositorioEtapasProducao,
        // private Transacao $transacao
        private UnidadeTransacional $unidadeTransacional
    ) {
    }

    public function salvarProducao( Producao $producao ) {

        // try {
        //     $this->transacao->iniciar();

        //     $this->repositorioProducao->salvarProducao( $producao );
        //     $this->repositorioEtapasProducao->salvarEtapasProducao( $producao->etapas() );

        //     $this->transacao->finalizar();
        // } catch ( Exception $e ) {
        //     $this->transacao->desfazer();
        //     throw new RepositorioException( 'Erro ao salvar ...' );
        // }

        $this->unidadeTransacional->execute( function() use ( $producao ) {
            $this->repositorioProducao->salvarProducao( $producao );
            $this->repositorioEtapasProducao->salvarEtapasProducao( $producao->etapas() );
        } );
    }
}