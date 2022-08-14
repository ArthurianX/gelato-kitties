import React from 'react';
import { render, screen } from '@testing-library/react';
import KittyList from './kitty-list';

// NOTE: Try to fix the act() error, quite difficult, but tests work with the error as well.

// import CategoriesFilter from '../../components/categories/categories';

// beforeAll(() => {
//     jest.useFakeTimers();
// });
//
// afterAll(() => {
//     jest.useRealTimers();
// });
// let container: Element | DocumentFragment | null;
//
// beforeEach(() => {
//     container = document.createElement('div');
//     document.body.appendChild(container);
// });
//
// afterEach(() => {
//     document.body.removeChild(container!);
//     container = null;
// });
//
// // eslint-disable-next-line @typescript-eslint/no-unused-expressions
// jest.mock('../../services/generate-static-taxonomy.ts'),
//     jest.fn(() => Promise.resolve(mockedTaxonomy));

test('h1 title should exist', async () => {
    render(<KittyList />);
    const titleElement = screen.getByText(/Gelato Kitties/i);
    expect(titleElement).toBeInTheDocument();
});
