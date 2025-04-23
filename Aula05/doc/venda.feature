Cenário: Encontra um produto que existe pelo código
    Dado que sou um Caixa
    Quando eu informo um código de um produto existente
    Então eu vejo a descrição e o preço do produto na tela

Cenário: Encontra um produto que existe pelo ean13
    Dado que sou um Caixa
    Quando eu informo um ean13 de um produto existente
    Então eu vejo a descrição e o preço do produto na tela

Cenário: Não encontra um produto
    Dado que sou um Caixa
    Quando eu informo um código de um produto inexistente
    Então eu vejo o erro informando que o produto não existe

Cenário: Adicionar produto sem quantidade
    Dado que sou um Caixa
    Quando eu informo um código de um produto existente
    e aciono a opção adicionar
    Então produto tem que ser exibido na tabela.