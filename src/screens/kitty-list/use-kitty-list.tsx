import { useEffect, useState } from 'react';
import fetchCards, { KittyCardInterface } from '../../services/fetch-cards';

export interface UseAppProps {
    setSelectedCategory: (category: string) => void;
    page: number;
    setPage: (page: number) => void;
    filteredKitties: KittyCardInterface[];
    loading: boolean;
    walletConnected: string;
    setWalletConnected: (wallet: string) => void;
}

const useKittyList = (): UseAppProps => {
    const [page, setPage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [kitties, setKitties] = useState<KittyCardInterface[]>([]);
    const [walletConnected, setWalletConnected] = useState<string>('');
    const [filteredKitties, setFilteredKitties] = useState<
        KittyCardInterface[]
    >([]);

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
                    return false;
                }) || [], // Empty the array if nothing is preset, maybe it's a page change
            );
        } else {
            setFilteredKitties(localKitties);
        }
    };

    useEffect(() => {
        filterKittiesByCurrentCategory(kitties);
        // eslint-disable-next-line
    }, [selectedCategory]);

    useEffect(() => {
        getNextKitties(page);
        // eslint-disable-next-line
    }, [page]);

    return {
        setSelectedCategory,
        page,
        setPage,
        filteredKitties,
        loading,
        walletConnected,
        setWalletConnected,
    };
};

export default useKittyList;
