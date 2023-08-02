export enum FormatoData {
    PADRAO = "DD/MM/AAAA",
    DIA_SEMANA_DIA_MES_ANO = "DIA_SEMANA, DD/MM/AAAA",
    DIA_MES = "DD/MM",
    MES = "MES",
    DIA_SEMANA_DIA_MES_ANO_LONG = "DIA_SEMANA, DD Mês AAAA"
}

/*
function formatarInformacoes(valor: number, data: Date, formatoData: FormatoData): string {
    const dataFormatada = formatarData(data, formatoData);
    const valorFormatado = formatarMoeda(valor);
    return `${dataFormatada} - ${valorFormatado}`;
}
*/