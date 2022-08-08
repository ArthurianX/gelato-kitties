import generateStaticTaxonomy, {
    KittiesCategories,
} from '../services/generate-static-taxonomy';
import { css, Progress, Tab, TabList, Tabs } from '@chakra-ui/react';
import React, { useState } from 'react';

export interface CategoriesFilterProps {
    filterCallback: (arg: string) => void;
    tabsOrFilters: 'tabs' | 'filters';
}
const CategoriesFilter = ({
    filterCallback,
    tabsOrFilters = 'tabs',
}: CategoriesFilterProps): JSX.Element => {
    const [categories, setCategories] = useState<KittiesCategories>([]);
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
        <Tabs isFitted onChange={(index) => filterCallback(categories[index])}>
            <TabList
                overflowX="auto"
                css={css({
                    scrollbarWidth: 'none',
                    '::-webkit-scrollbar': { display: 'none' },
                    '-webkit-overflow-scrolling': 'touch',
                    boxShadow: 'inset 0 -2px 0 rgba(0, 0, 0, 0.1)',
                    border: '0 none',
                })}
            >
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
