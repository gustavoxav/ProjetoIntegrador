<?php

class Pais {

    const MIN_NOME = 2;
    const MAX_NOME = 60;
    const MSG_NOME = 'O nome deve ter de ' . self::MIN_NOME . ' a ' . self::MAX_NOME . ' caracteres.';

    public function __construct(
        public readonly int $id = 0,
        public readonly string $nome = '',
        public readonly string $ddi = ''
    ) {
    }

    /**
     * Valida os dados do país.
     *
     * @return string[]
     */
    public function validar(): array {
        $mensagens = [];

        $tamNome = mb_strlen( $this->nome );
        if ( $tamNome < self::MIN_NOME || $tamNome > self::MAX_NOME ) {
            $mensagens []= self::MSG_NOME;
        }

        // TODO: validar outros

        return $mensagens;
    }
}