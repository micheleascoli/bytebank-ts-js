// Tipos Primitivos
let valor = 3000;
let nome = "";
let isPago = true;
let qualquer = "";
qualquer = 22;
// Arrays
const lista = [];
lista.push(0, 1.6, 22, 1, 4);
// Enums
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
};
