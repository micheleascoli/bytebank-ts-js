export var FormatoData;
(function (FormatoData) {
    FormatoData["PADRAO"] = "DD/MM/AAAA";
    FormatoData["DIA_SEMANA_DIA_MES_ANO"] = "DIA_SEMANA, DD/MM/AAAA";
    FormatoData["DIA_MES"] = "DD/MM";
    FormatoData["MES"] = "MES";
    FormatoData["DIA_SEMANA_DIA_MES_ANO_LONG"] = "DIA_SEMANA, DD M\u00EAs AAAA";
})(FormatoData || (FormatoData = {}));
/*
function formatarInformacoes(valor: number, data: Date, formatoData: FormatoData): string {
    const dataFormatada = formatarData(data, formatoData);
    const valorFormatado = formatarMoeda(valor);
    return `${dataFormatada} - ${valorFormatado}`;
}
*/ 
