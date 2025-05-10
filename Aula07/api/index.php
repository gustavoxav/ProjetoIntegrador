<?php
require_once 'vendor/autoload.php';
use \phputil\router\Router;
use function \phputil\cors\cors;

$app = new Router();

// Configuração já ajustada para uso futuro de login
$app->use( cors( [
    'origin' => [ 'http://localhost:5173', 'http://localhost:8080' ],
    'allowedHeaders' => [ 'Host', 'Origin', 'Accept', 'Content-Type', 'Content-Length', 'Cookie' ],
    'exposeHeaders' => [ 'Content-Type', 'Content-Length', 'Set-Cookie' ]
] ) );

$app->use( fn( $req, $res ) => $res->send('') ); // Workaround para middleware (atualização futura deve resolver)

$pdo = null;
try {
    $pdo = new PDO(
        'mysql:dbname=mvc;host=localhost;charset=utf8',
        'root', '',
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ]
    );
} catch ( PDOException $e ) {
    http_response_code( 500 );
    die( 'Erro ao criar o banco de dados.' );
}

$app->post( '/paises', function( $req, $res ) use ( $pdo ) {
    $dados = (array) $req->body();
    $gestor = new GestorPais(
        new RepositorioPaisEmBDR( $pdo ) );
    try {
        $gestor->salvarPais( $dados );
    } catch ( DominioException $e ) {
        $res->status( 400 )->json( $e->getProblemas() );
    } catch ( Exception $e ) {
        $res->status( 500 )->json( [ $e->getMessage() ] );
    }
} );


$app->get( '/paises', function( $req, $res ) {
    $res->send( 'Países' );
} );


$app->get( '/', function( $req, $res ) {
    $res->send( 'OK' );
} );


$app->listen();