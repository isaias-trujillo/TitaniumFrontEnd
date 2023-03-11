import ClientRequest from "../req/ClientRequest";
import fetchOnPost from "../fetchOnPost";

export default async function onPostClient(request: ClientRequest) {
    return fetchOnPost({
        url: 'https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-personas/servicio-de-clientes/v1/clientes',
        request: request
    })
}
