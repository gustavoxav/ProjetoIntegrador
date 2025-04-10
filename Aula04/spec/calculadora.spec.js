import { expect, test } from "@playwright/test";

async function calcular( page, num1, num2, operacao, esperado ) {
    await page.goto( 'http://localhost:5173' );
    await page.fill( '#n1', num1 );
    await page.fill( '#n2', num2 );
    await page.selectOption( '#op', operacao );
    await page.click( '#calcular' );
    const resultado = await page.innerText( 'output' );
    expect( resultado ).toBe( esperado );
}

test.describe( 'Calculadora', () => {

    test( 'Realiza adição de dois números', async ({page}) => {
        await calcular( page, '10', '20', 'Adição', '30' );
    } );

    test( 'Realiza subtração de dois números', async ({page}) => {
        await calcular( page, '10', '20', 'Subtração', '-10' );
    } );

} );