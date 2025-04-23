import { Calculadora } from './calculadora.js';
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.querySelector('#calcular')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', calcular);
});
function calcular(event) {
    var _a, _b, _c;
    event.preventDefault();
    const n1 = Number((_a = document.querySelector('#n1')) === null || _a === void 0 ? void 0 : _a.value);
    const n2 = Number((_b = document.querySelector('#n2')) === null || _b === void 0 ? void 0 : _b.value);
    const op = (_c = document.querySelector('#op')) === null || _c === void 0 ? void 0 : _c.value;
    const calculadora = new Calculadora();
    const resultado = calculadora.calcular(n1, n2, op);
    const output = document.querySelector('output');
    // if ( output ) {
    //     output.innerText = resultado.toString();
    // }
    output.innerText = resultado.toString();
}
