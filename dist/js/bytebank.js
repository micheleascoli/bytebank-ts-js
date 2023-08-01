let saldo = 3000;
alert("Testando compilação do TS");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    /**
     * Esse método não deixará a página ser recarregada, que é um comportamento padrão
     * de um formulário, ou seja, o método previne o comportamento padrão do formulário.
     * Dessa forma, a página não será recarregada, mas ainda assim teremos acesso aos
     * dados do evento, para a coleta das informações postadas pelo formulário.
     */
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de Transação é inválido!");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    const novaTransação = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransação);
    elementoFormulario.reset();
});
