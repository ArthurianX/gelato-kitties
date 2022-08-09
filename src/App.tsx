import React from 'react';
import logo from './assets/logo-hover.gif';
import './App.scss';
import { SimpleGrid, CircularProgress } from '@chakra-ui/react';
import ToggleLights from './components/toggle-light';
import CategoriesFilter from './components/categories';
import useApp from './use-app';
import Pagination from './components/pagination';
import KittyCard from './components/card';

function App() {
    // NOTE: For simplicity's sake, manage state here at the top of the app in a hook, and make all other components dumb (functional)
    const { setSelectedCategory, page, setPage, filteredKitties, loading } =
        useApp();

    return (
        <div className="App">
            <header className="AppHeader">
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
                <SimpleGrid minChildWidth={400} spacing={8} columns={4}>
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

export default App;
