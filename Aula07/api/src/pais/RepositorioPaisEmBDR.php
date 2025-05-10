<?php

class RepositorioPaisEmBDR implements RepositorioPais {

    public function __construct(
        private PDO $pdo
    ) {
    }
    public function adicionar( Pais $p ): void {
        try {
            $ps = $this->pdo->prepare(
            'INSERT INTO pais ( nome, ddi ) VALUES ( :nome, :ddi )' );
            $ps->execute(
                [ 'nome' => $p->nome, 'ddi' => $p->ddi ] );
        } catch ( PDOException $e ) {
            throw new RepositorioException(
                $e->getMessage()
                // 'Erro ao salvar o país.'
            );
        }
    }

}