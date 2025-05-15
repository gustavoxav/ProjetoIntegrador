<?php

describe( 'GestorPais', function() {

    $this->gestor = null;

    beforeAll( function() {
        `cd .. && pnpm run db`;
        $pdo = new PDO( 'mysql:dbname=mvc;host=localhost;charset=utf8', 'root', '' );

        $repo = new RepositorioPaisEmBDR( $pdo );
        $this->gestor = new GestorPais( $repo );
    } );

    it( 'Permite cadastrar um país válido', function() {
        $this->gestor->salvarPais( [ 'nome' => 'Brasil', 'ddi' => '55' ] );
    } );

    it( 'Não permite cadastrar o mesmo país duas vezes', function() {
        expect( function() {
            $this->gestor->salvarPais( [ 'nome' => 'Brasil', 'ddi' => '55' ] );
            $this->gestor->salvarPais( [ 'nome' => 'Brasil', 'ddi' => '55' ] );
        } )->toThrow( new DominioException( 'O país não ser duplicado.' ) );
    } );

} );