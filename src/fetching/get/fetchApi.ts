import GetResponse from "./GetResponse";

export default async function fetchApi<T extends GetResponse>({url}: { url: string }) {
    return await fetch(url, {
        headers: {
            'Ocp-Apim-Subscription-Key': 'c15de1d252f2459a9811cfb32fbda081'
        },
    })
        .then((res) => res.json())
        .then((res) => res as T[])
}
