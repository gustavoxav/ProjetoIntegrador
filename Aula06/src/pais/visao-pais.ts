export interface VisaoPais {

    dadosPais(): { nome: string, ddi: string };

    exibirMensagens( mensagens: string[] );
}