import React from 'react';
import logo from './assets/logo-hover.gif';
import './App.scss';
import { SimpleGrid, Box } from '@chakra-ui/react';
import ToggleLights from './components/toggle-light';
import CategoriesFilter from './components/categories';
import useApp from './use-app';

function App() {
    // NOTE: For simplicity's sake, manage state here at the top of the app in a hook, and make all other components dumb (functional)
    const { setSelectedCategory, page, setPage, filteredKitties } = useApp();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="logo" alt="logo" />
                <h1>Gelato Kitties</h1>
            </header>

            <div className="main-content">
                <CategoriesFilter
                    filterCallback={setSelectedCategory}
                    tabsOrFilters={'tabs'}
                />
                <SimpleGrid minChildWidth={400} spacing={8}>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                </SimpleGrid>
            </div>

            <div className="toggler">
                <ToggleLights />
            </div>
        </div>
    );
}

export default App;
