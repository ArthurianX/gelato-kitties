import { useEffect, useState } from 'react';
import fetchCards, { KittyCardInterface } from './services/fetch-cards';

export interface UseAppProps {
    setSelectedCategory: (category: string) => void;
    page: number;
    setPage: (page: number) => void;
    filteredKitties: KittyCardInterface[];
    loading: boolean;
}

const useApp = (): UseAppProps => {
    const [page, setPage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [kitties, setKitties] = useState<KittyCardInterface[]>([]);
    const [filteredKitties, setFilteredKitties] = useState<
        KittyCardInterface[]
    >([]);

    useEffect(() => {
        filterKittiesByCurrentCategory(kitties);
    }, [selectedCategory]);

    useEffect(() => {
        getNextKitties(page);
    }, [page]);

    const getNextKitties = (page: number): void => {
        setLoading(true);
        fetchCards(page * 12, 12).then((result) => {
            // console.log(kitties);
            setKitties(result!);
            if (selectedCategory === 'all') {
                setFilteredKitties(result!);
            } else {
                filterKittiesByCurrentCategory(result!);
            }
            setLoading(false);
        });
    };

    const filterKittiesByCurrentCategory = (
        localKitties: KittyCardInterface[],
    ) => {
        if (selectedCategory !== 'all') {
            setFilteredKitties(
                localKitties.filter((kitty) => {
                    if (
                        selectedCategory.indexOf('is_') > -1 &&
                        // @ts-ignore
                        kitty[selectedCategory]
                    ) {
                        return kitty;
                    } else if (kitty.color === selectedCategory) {
                        return kitty;
                    }
                }) || [], // Empty the array if nothing is preset, maybe it's a page change
            );
        } else {
            setFilteredKitties(localKitties);
        }
    };

    return { setSelectedCategory, page, setPage, filteredKitties, loading };
};

export default useApp;
