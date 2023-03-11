import fetchApi from "../fetchApi";
import PlanResponse from "../res/PlanResponse";

export default async function fetchPlansApi() {
    return fetchApi<PlanResponse>({url: "https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-planes/servicio-de-planes/v1/planes"})
}
