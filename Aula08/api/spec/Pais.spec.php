<?php
describe( 'Pais', function() {

    it( 'observa tamanho mínimo incorreto', function() {
        $p = new Pais( 0, 'A', '+51' );
        $problemas = $p->validar();
        expect( $problemas )->toHaveLength( 1 );
    } );

} );