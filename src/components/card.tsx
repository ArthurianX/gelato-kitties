import { Box, useColorMode } from '@chakra-ui/react';
import styles from './card.module.scss';
import { KittyCardInterface } from '../services/fetch-cards';
import React from 'react';

const KittyCard = ({
    kitty,
    fixedSize = false,
}: {
    kitty: KittyCardInterface;
    fixedSize: boolean;
}): JSX.Element => {
    const { colorMode } = useColorMode();
    return (
        <Box
            bg={colorMode === 'light' ? 'pink.100' : 'pink.800'}
            className={`${styles.kittyCard} ${
                fixedSize ? styles.kittyCardFixed : ''
            }`}
        >
            <img src={kitty.image_url} alt="" />
            <div className={styles.info}>
                <div className={styles.name}>{kitty.name || '-'}</div>
            </div>
        </Box>
    );
};

export default KittyCard;
