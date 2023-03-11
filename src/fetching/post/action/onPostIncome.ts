import fetchOnPost from "../fetchOnPost";
import IncomeRequest from "../req/IncomeRequest";

export default async function onPostIncome(request: IncomeRequest) {
    return await fetchOnPost({
        url: 'https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-planes/servicio-de-ingresos/v1/ingresos',
        request: request
    }).then((res) => {
        console.log(request)
        return res
    }).then((res) => (
        {
            ok: res.ok,
            json: res.json()
        }
    )).then(({ok, json}) => (
            {
                ok: ok,
                data: json.then((res) => res.data)
            }
        )
    )
}
