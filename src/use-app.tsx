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

    const getKitties = (page: number): void => {};

    useEffect(() => {
        console.log('selectedCategory has changed', selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
        getNextKitties(page);
    }, [page]);

    const getNextKitties = (page: number): void => {
        setLoading(true);
        fetchCards(page, 10).then((result) => {
            // console.log(kitties);
            setKitties(result!);
            if (selectedCategory === 'all') {
                setFilteredKitties(result!);
            }
            setLoading(false);
        });
    };

    return { setSelectedCategory, page, setPage, filteredKitties, loading };
};

export default useApp;
