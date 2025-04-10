import { test, expect } from '@playwright/test';

test.describe( 'pesquisa na web', () => {

    // test( 'encontra o site do CEFET corretamente', async ( { page } ) => {
    //     await page.goto( 'https://google.com' );
    //     await page.locator( 'textarea' ).nth( 0 ).fill( 'CEFET Nova Friburgo' );
    //     await page.keyboard.press( 'Enter' );
    //     await page.waitForTimeout( 3000 );
    //     const conteudo = await page.innerText( 'body' );
    //     expect( conteudo ).toContain( 'CEFET/RJ' );
    // } );

    test( 'Pesquisa calendário no site do CEFET', async ({page}) => {
        await page.goto( 'https://cefet-rj.br' );
        await page.fill( '#portal-searchbox-field', 'calendário 2025' );
        await page.keyboard.press();
        const conteudo = await page.innerText( 'div.search-results' );
        expect( conteudo ).toContain( '2025' );
    } );
} );