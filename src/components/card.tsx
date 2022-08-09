import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styles from './card.module.scss';
import { KittyCardInterface } from '../services/fetch-cards';
import React from 'react';

const KittyCard = ({ kitty }: { kitty: KittyCardInterface }): JSX.Element => {
    const { colorMode } = useColorMode();
    return (
        <Box
            bg={colorMode === 'light' ? 'pink.200' : 'pink.800'}
            className={styles.kittyCard}
        >
            <img src={kitty.image_url} alt="" />
            <div className={styles.info}>
                <div className={styles.name}>{kitty.name || '-'}</div>
            </div>
        </Box>
    );
};

export default KittyCard;
