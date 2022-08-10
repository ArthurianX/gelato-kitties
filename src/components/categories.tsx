import generateStaticTaxonomy, {
    KittiesCategories,
} from '../services/generate-static-taxonomy';
import { Progress, Tab, TabList, Tabs } from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from './categories.module.scss';

export interface CategoriesFilterProps {
    filterCallback: (arg: string) => void;
    tabsOrFilters: 'tabs' | 'filters';
}

const CategoriesFilter = ({
    filterCallback,
    tabsOrFilters = 'tabs',
}: CategoriesFilterProps): JSX.Element => {
    const [categories, setCategories] = useState<KittiesCategories>([]);
    const handleTabsChange = (index: number) => {
        // NOTE: There's a Rect cycle problem here I don't have time to solve.
        setTimeout(() => {
            // Moving the callback in the event loop fixes the issue.
            filterCallback(categories[index]);
        }, 0);
    };
    generateStaticTaxonomy().then((cat) => setCategories(cat));

    const beautifyTabName = (tab: string): string => {
        if (tab.indexOf('is_') > -1) {
            const mystr = tab.substr(3);
            return mystr[0].toUpperCase() + mystr.slice(1).toLowerCase();
        } else {
            return tab[0].toUpperCase() + tab.slice(1).toLowerCase();
        }
    };

    const LoadingComponent = <Progress size="xs" isIndeterminate />;
    const TabsComponent = (
        <Tabs colorScheme={'pink'} isFitted onChange={handleTabsChange}>
            <TabList data-testid="tabs-list" className={styles.tabsList}>
                {categories.map((tab, index) => (
                    <Tab key={index}>{beautifyTabName(tab)}</Tab>
                ))}
            </TabList>
        </Tabs>
    );
    const FiltersComponent = <></>;

    const RenderedComponent =
        tabsOrFilters === 'tabs' ? TabsComponent : FiltersComponent;

    return <>{categories.length ? RenderedComponent : LoadingComponent}</>;
};

export default CategoriesFilter;
