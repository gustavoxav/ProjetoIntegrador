export class Pais {

    public constructor(
        public readonly nome: string,
        public readonly ddi: string,
    ) {
    }

    /** Retorna os problemas encontrados. */
    validar(): string[] {
        // TO-DO
        return [];
    }
};