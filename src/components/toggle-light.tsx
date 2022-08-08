import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleLights = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            colorScheme={colorMode === 'light' ? 'gray' : 'orange'}
            variant={'ghost'}
            size={'sm'}
            isRound
            onClick={toggleColorMode}
            aria-label="Toggle Lights"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
    );
};

export default ToggleLights;
