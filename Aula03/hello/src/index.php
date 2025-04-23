<?php
require_once 'vendor/autoload.php';

use function phputil\extenso\extenso;

echo extenso( 123.45 ), PHP_EOL;

$cnpj = new CPF();
echo 'Válido: ', $cnpj->valido() ? 'Sim' : 'Não';

$cnpj = new CNPJ();
echo 'Válido: ', $cnpj->valido() ? 'Sim' : 'Não';