import fetchApi from "../fetchApi";
import IncomeResponse, {ParsedIncome} from "../res/IncomeResponse";

export default async function fetchIncomesApi() {
    return fetchApi<IncomeResponse>({url: "https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-planes/servicio-de-ingresos/v1/ingresos"})
        .then((res) => res.map((response) => ParsedIncome.from(response)))
}
