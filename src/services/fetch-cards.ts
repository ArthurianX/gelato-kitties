export interface KittyAPIResponse {
    offset: number;
    limit: number;
    greatValues?: KittyCardInterface[] | null;
    fancies?: null[] | null;
}
export interface KittyCardInterface {
    id: number;
    name?: string | null;
    image_url: string;
    image_url_cdn: string;
    image_url_png: string;
    image_path: string;
    kitty_items_image_path: string;
    generation: number;
    created_at: string;
    birthday: string;
    color: string;
    kitty_type?: null;
    is_fancy: boolean;
    is_exclusive: boolean;
    is_special_edition: boolean;
    fancy_type?: null;
    language: string;
    enhanced_cattributes?: EnhancedCattributesEntity[] | null;
    is_prestige: boolean;
    prestige_type?: null;
    prestige_ranking?: null;
    prestige_time_limit?: null;
    status: Status;
    purrs: Purrs;
    hatcher: HatcherOrOwner;
    watchlist: Watchlist;
    hatched: boolean;
    auction: Auction;
    owner: HatcherOrOwner;
    sire: SireOrMatron;
    matron: SireOrMatron;
    offer: Offer;
    image_url_kitty_items: string;
}
export interface EnhancedCattributesEntity {
    type: string;
    kittyId: number;
    position: number;
    description: string;
}
export interface Status {
    cooldown: number;
    dynamic_cooldown: number;
    cooldown_index: number;
    is_ready: boolean;
    is_gestating: boolean;
    cooldown_end_block: number;
    pending_tx_type?: null;
    pending_tx_since?: null;
}
export interface Purrs {
    count: number;
    is_purred: boolean;
}
export interface HatcherOrOwner {
    address: string;
    image: string;
    nickname: string;
    hasDapper: boolean;
}
export interface Watchlist {
    count: number;
    is_watchlisted: boolean;
}
export interface Auction {
    id: number;
    type: string;
    start_price: string;
    end_price: string;
    start_time: string;
    end_time: string;
    current_price: string;
    duration: string;
    status: string;
    seller: Seller;
}
export interface Seller {
    address: string;
    isDapper: boolean;
    image: string;
    nickname: string;
}
export interface SireOrMatron {
    id: number;
    name?: string | null;
    image_url: string;
    image_url_cdn: string;
    generation: number;
    created_at: string;
    color: string;
    is_fancy: boolean;
    is_exclusive: boolean;
    fancy_type?: null;
    image_url_png: string;
    image_url_kitty_items: string;
}
export interface Offer {}

const fetchCards = async (
    offset = 0,
    limit = 10,
): Promise<KittyCardInterface[] | null | undefined> => {
    const url = `https://api.cryptokitties.co/v2/kitties/recommend?offset=${offset}&limit=${limit}`;
    const response: KittyAPIResponse = await fetch(url).then((response) =>
        response.json(),
    );

    // No type safety, no error handling, no fallback to known state :(
    return response.greatValues;
};

export default fetchCards;
