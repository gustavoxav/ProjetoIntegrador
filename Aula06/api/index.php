<?php
require_once 'vendor/autoload.php';
use \phputil\router\Router;

$app = new Router();

$app->post( '/paises', function( $req, $res ) {
    $dados = (array) $req->body();
    print_r( $dados );
    // $gestor = new GestorPais();
    // $gestor->salvarPais( $dados );
} );


$app->get( '/paises', function( $req, $res ) {
    echo 'Países';
} );


$app->listen();