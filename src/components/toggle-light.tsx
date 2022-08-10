import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleLights = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            data-testid="toggle-light"
            colorScheme={colorMode === 'light' ? 'gray' : 'orange'}
            variant={'outline'}
            size={'md'}
            isRound
            onClick={toggleColorMode}
            aria-label="Toggle Lights"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
    );
};

export default ToggleLights;
