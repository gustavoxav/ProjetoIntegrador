<?php
describe( 'Calculadora', function() {

    describe( 'somar', function() {

            it( 'somar dois números positivos dá um número positivo', function() {
                $c = new Calculadora();
                $resultado = $c->somar( 10, 20 );
                expect( $resultado )->toBe( 30 );
            } );
    } );
} );