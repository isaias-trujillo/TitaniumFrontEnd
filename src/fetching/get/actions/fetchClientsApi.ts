import ClientResponse from "../res/ClientResponse";
import fetchApi from "../fetchApi";


export default async function fetchClientsApi() {
    return fetchApi<ClientResponse>({url: "https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-personas/servicio-de-clientes/v1/clientes"})
}
