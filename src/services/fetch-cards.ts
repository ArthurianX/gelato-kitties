export interface FetchCardsInterface {
    offset: number;
    limit: number;
}

export interface NFTCardInterface {
    id: string;
}
const fetchCards = ({
    offset = 0,
    limit = 10,
}: FetchCardsInterface): Promise<NFTCardInterface[]> => {
    const url = `https://api.cryptokitties.co/v2/kitties/recommend?offset=${offset}&limit=${limit}`;

    return fetch(url).then((response) => response.json());
};

export default fetchCards;
