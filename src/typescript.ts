// Tipos Primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = true;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(0, 1.6, 22, 1, 4);

// Tipos Personalizados (Type Alias)
type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}

// Enums

enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
}
