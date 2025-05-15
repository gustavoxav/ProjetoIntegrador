<?php

interface RepositorioPais {

    /**
     * Adiciona um país
     * @param Pais $p
     * @return void
     * @throws RepositorioException
     */
    public function adicionar( Pais $p ): void;

    public function jaExistePaisComNome( string $nome ): bool;
}