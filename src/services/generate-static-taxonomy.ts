// NOTE: Shallowly fetch 80 recommended NFTs and extract taxonomy from them

import fetchCards, { KittyCardInterface } from './fetch-cards';

export type KittiesCategories = string[];
const generateStaticTaxonomy = async (): Promise<KittiesCategories> => {
    // NOTE: Couldn't find documentation for v2 API, so I'll just make assumptions and local conventions
    // API Limit is 20 items per page, so we'll do 4 basic calls

    let taxonomy = [
        'is_exclusive',
        'is_fancy',
        'is_prestige',
        'is_special_edition',
    ];

    let kitties: KittyCardInterface[] = [];
    // for (let i = 0; i < 3; i++) {
    //     const localKitti = await fetchCards(20 * i, 20);
    //     kitties = [...kitties, ...localKitti!];
    // }

    kitties.map((cat) => {
        if (taxonomy.indexOf(cat.color) < 0) {
            taxonomy.push(cat.color);
        }
    });

    // NOTE: In case of 402, this is a static list below
    // ['is_exclusive', 'is_fancy', 'is_prestige', 'is_special_edition', 'sapphire', 'parakeet', 'thundergrey', 'chestnut', 'strawberry', 'dahlia', 'forgetmenot', 'coralsunrise', 'sizzurp', 'mintgreen', 'cyan', 'doridnudibranch', 'olive', 'gold', 'topaz']
    // return taxonomy;
    return [
        'is_exclusive',
        'is_fancy',
        'is_prestige',
        'is_special_edition',
        'sapphire',
        'parakeet',
        'thundergrey',
        'chestnut',
        'strawberry',
        'dahlia',
        'forgetmenot',
        'coralsunrise',
        'sizzurp',
        'mintgreen',
        'cyan',
        'doridnudibranch',
        'olive',
        'gold',
        'topaz',
    ];
};

export default generateStaticTaxonomy;
