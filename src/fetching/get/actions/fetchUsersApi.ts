import fetchApi from "../fetchApi";
import UserResponse from "../res/UserResponse";


export default async function fetchUsersApi() {
    return fetchApi<UserResponse>({url: "https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-personas/servicio-de-usuarios/v1/usuarios"})
}
