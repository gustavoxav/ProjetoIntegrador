<?php

interface RepositorioPais {

    /**
     * Adiciona um país
     * @param Pais $p
     * @return void
     * @throws RepositorioException
     */
    public function adicionar( Pais $p ): void;
}