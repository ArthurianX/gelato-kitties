import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import KittyList from '../../screens/kitty-list/kitty-list';

test('Render Exclusive category with no items on the first page', async () => {
    render(<KittyList />);
    await waitFor(() => screen.findByText('Exclusive'));

    fireEvent.click(screen.getByText('Exclusive'));
    expect(screen.getByTestId('kitty-results').children.length).toEqual(0);
});
