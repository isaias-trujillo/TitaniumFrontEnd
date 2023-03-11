import fetchApi from "../fetchApi";
import TrainerResponse from "../res/TrainerResponse";

export default async function fetchTrainersApi() {
    return fetchApi<TrainerResponse>({url: "https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-personas/servicio-de-entrenadores/v1/entrenadores"})
}
