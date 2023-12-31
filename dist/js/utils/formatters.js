import { FormatoData } from "../types/FormatoData.js";
export function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
export function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato == FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato == FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "2-digit"
        });
    }
    else if (formato == FormatoData.MES) {
        return data.toLocaleDateString("pt-br", {
            month: "long"
        });
    }
    else if (formato == FormatoData.DIA_SEMANA_DIA_MES_ANO_LONG) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    }
    return data.toLocaleDateString("pt-br");
}
