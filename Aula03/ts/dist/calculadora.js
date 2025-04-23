export class Calculadora {
    calcular(n1, n2, op) {
        switch (op) {
            case '+': return n1 + n2;
            case '-': return n1 - n2;
            case '/': return n2 == 0 ? 0 : n1 / n2;
            case '*': return n1 * n2;
            case '^': return n1 ** n2;
            default: throw new Error('Operação não suportada.');
        }
    }
}
// const c = new Calculadora();
// c.calcular( 10, 20, '/' );
