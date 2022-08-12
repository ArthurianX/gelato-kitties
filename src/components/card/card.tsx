import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react';
import { KittyCardProps } from './card.types';

import styles from './card.module.scss';
import './card-svg-control.scss';
import useCard from './use-card';

const KittyCard = ({
    kitty,
    fixedSize = false,
}: KittyCardProps): JSX.Element => {
    const {
        showBodyPartClass,
        showKittyBodyPart,
        setShowKittyBodyPart,
        remoteKitty,
        colorMode,
        renderedSVGParent,
    } = useCard(kitty);

    return (
        <Box
            bg={colorMode === 'light' ? 'pink.100' : 'pink.800'}
            className={`${styles.kittyCard} ${
                fixedSize ? styles.kittyCardFixed : ''
            }`}
        >
            {showKittyBodyPart !== 'all' ? (
                <div
                    className={`${styles.renderedSvg} ${showBodyPartClass(
                        showKittyBodyPart,
                    )}`}
                    dangerouslySetInnerHTML={{ __html: remoteKitty! }}
                    ref={renderedSVGParent}
                ></div>
            ) : (
                <img className={styles.image} src={kitty.image_url} alt="" />
            )}
            <div className={styles.info}>
                <Box className={styles.bodyPartControl}>
                    <h2>X-Ray:</h2>
                    <RadioGroup
                        onChange={
                            setShowKittyBodyPart as unknown as (
                                nextValue: string,
                            ) => void
                        }
                        value={showKittyBodyPart}
                    >
                        <Stack direction="column">
                            <Radio
                                size="lg"
                                isInvalid
                                colorScheme="red"
                                value="all"
                            >
                                All
                            </Radio>
                            <Radio
                                size="lg"
                                isInvalid
                                colorScheme="red"
                                value="eyes"
                            >
                                Eyes
                            </Radio>
                            <Radio
                                size="lg"
                                isInvalid
                                colorScheme="red"
                                value="mouth"
                            >
                                Mouth
                            </Radio>
                            <Radio
                                size="lg"
                                isInvalid
                                colorScheme="red"
                                value="body"
                            >
                                Body
                            </Radio>
                            <Radio
                                size="lg"
                                isInvalid
                                colorScheme="red"
                                value="tail"
                            >
                                Tail
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
                <div className={styles.name}>{kitty.name || '-'}</div>
            </div>
        </Box>
    );
};

export default KittyCard;
