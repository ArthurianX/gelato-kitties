import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';
import KittyList from '../screens/kitty-list/kitty-list';

test('Toggle Light should work', async () => {
    render(
        <ChakraProvider resetCSS theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <React.StrictMode>
                <KittyList />
            </React.StrictMode>
        </ChakraProvider>,
    );

    // Moon icon is present
    await waitFor(() => screen.getByTestId('toggle-dark-icon'));
    expect(screen.getByTestId('toggle-dark-icon')).toBeInTheDocument();

    // Sun icon replaces the moon icon when pressing the button
    fireEvent.click(screen.getByTestId('toggle-dark-icon'));
    await waitFor(() => screen.getByTestId('toggle-light-icon'));
    expect(screen.getByTestId('toggle-light-icon')).toBeInTheDocument();
});
