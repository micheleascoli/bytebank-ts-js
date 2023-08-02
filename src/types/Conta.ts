import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = 3000;

function debitar(valor: number): void {
    if ( valor <= 0) {
        throw new Error("O valor a ser debitado deve ser maior que zero!");
    } else if (valor >= saldo){
        throw new Error("Saldo insuficiente!");
    }
    saldo-=valor;
}
function depositar(valor: number): void {
    if ( valor <= 0) {
        throw new Error("O valor a ser depositado deve ser maior que zero!");
    }

    saldo+= valor;
}

const Conta = {
    getSaldo(){
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransação(novaTransacao: Transacao): void {
        if(novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
           depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        } else {
            throw new Error("Tipo de Transação é inválido!");
        }  
        
        console.log(novaTransacao);
    }
}

export default Conta;