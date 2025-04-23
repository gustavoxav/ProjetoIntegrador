<?php

describe( 'dividir', function() {

    it( 'faz divisão de inteiros', function() {
        expect( dividir( 4, 2 ) )->toBe( 2 );
    } );

} );