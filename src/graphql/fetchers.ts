// https://api.cryptokitties.co/v3/kitties/1290513
// const url = `https://api.cryptokitties.co/v2/kitties/recommend?offset=${offset}&limit=${limit}`;

const BASE_URL = 'https://api.cryptokitties.co/';

const fetchUrl = (path: string) => {
    return fetch(`${BASE_URL}${path}`).then((res) => res.json());
};
export const fetchKitties = (offset: string, limit: string) => {
    return fetchUrl(`v2/kitties?offset=${offset}&limit=${limit}`).then(
        (json) => json.kitties,
    );
};

export const fetchRecommendedKitties = (offset: string, limit: string) => {
    return fetchUrl(
        `v2/kitties/recommend?offset=${offset}&limit=${limit}`,
    ).then((json) => json.kitties);
};

export const fetchKitty = (id: number) => {
    return fetchUrl(`v3/kitties/${id}`);
};
