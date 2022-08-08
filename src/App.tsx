import React from 'react';
import logo from './assets/logo-hover.gif';
import './App.scss';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ToggleLights from './components/toggle-light';
import fetchCards from './services/fetch-cards';
import generateStaticTaxonomy from './services/generate-static-taxonomy';
import CategoriesFilter from './components/categories';

function App() {
    // NOTE: For simplicity's sake, manage state here at the top of the app, and make all other components dumb (functional)

    fetchCards(0, 10).then((result) => {
        console.log('fetchCards', result);
    });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="logo" alt="logo" />
                <h1>Gelato Kitties</h1>

                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    Learn React*/}
                {/*</a>*/}
            </header>
            <CategoriesFilter
                filterCallback={(arg) => {
                    console.log('filterCallback arg is', arg);
                }}
                tabsOrFilters={'tabs'}
            />
            <div className="toggler">
                <ToggleLights />
            </div>
        </div>
    );
}

export default App;
