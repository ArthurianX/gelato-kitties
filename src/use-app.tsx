import { useEffect, useState } from 'react';
import fetchCards, { KittyCardInterface } from './services/fetch-cards';

export interface UseAppProps {
    setSelectedCategory: (category: string) => void;
    page: number;
    setPage: (page: number) => void;
    filteredKitties: KittyCardInterface[];
}

const useApp = (): UseAppProps => {
    const [page, setPage] = useState<number>(0);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [kitties, setKitties] = useState<KittyCardInterface[]>([]);
    const [filteredKitties, setFilteredKitties] = useState<
        KittyCardInterface[]
    >([]);

    const getKitties = (page: number): void => {
        fetchCards(page, 20).then((result) => {
            setKitties(result!);
        });
    };

    useEffect(() => {
        console.log('selectedCategory has changed', selectedCategory);
    }, [selectedCategory]);

    return { setSelectedCategory, page, setPage, filteredKitties };
};

export default useApp;
