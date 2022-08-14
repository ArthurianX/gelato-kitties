import React from 'react';
import { SimpleGrid, CircularProgress } from '@chakra-ui/react';
import ToggleLights from '../../components/toggle-light';
import CategoriesFilter from '../../components/categories/categories';
import useKittyList from './use-kitty-list';
import Pagination from '../../components/pagination';
import KittyCard from '../../components/card/card';

import logo from '../../assets/logo-hover.gif';
import './kitty-list.scss';

function KittyList() {
    const { setSelectedCategory, page, setPage, filteredKitties, loading } =
        useKittyList();

    return (
        <div className="kittyList">
            <header className="kittyHeader">
                <img src={logo} className="logo" alt="logo" />
                <h1>Gelato Kitties</h1>
            </header>

            {loading && (
                <div className="loading">
                    <CircularProgress
                        color={'pink.600'}
                        isIndeterminate
                        size="120px"
                    />
                </div>
            )}
            <div className="mainContent">
                <CategoriesFilter
                    filterCallback={setSelectedCategory}
                    tabsOrFilters={'tabs'}
                />
                <SimpleGrid
                    minChildWidth={400}
                    spacing={8}
                    columns={4}
                    data-testid="kitty-results"
                >
                    {filteredKitties.map((kitty, index) => (
                        <KittyCard
                            key={kitty.id}
                            kitty={kitty}
                            fixedSize={filteredKitties.length < 4}
                        />
                    ))}
                </SimpleGrid>
                <Pagination page={page} paginationCallback={setPage} />
            </div>

            <div className="toggler">
                <ToggleLights />
            </div>
        </div>
    );
}

export default KittyList;
