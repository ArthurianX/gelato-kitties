import { SelectedKittyBodyPart } from './card.types';
import React, { useEffect, useRef, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { KittyCardInterface } from '../../services/fetch-cards';

const useCard = (kitty: KittyCardInterface) => {
    const showBodyPartClass = (part: SelectedKittyBodyPart): string => {
        // NOTE: Generate a CSS class that will hide all the parts minus the selected one

        let selectedPart;
        switch (part) {
            case 'body':
                selectedPart = 'showOnlyBody';
                break;
            case 'eyes':
                selectedPart = 'showOnlyEyes';
                break;
            case 'mouth':
                selectedPart = 'showOnlyMouth';
                break;
            case 'tail':
                selectedPart = 'showOnlyTail';
                break;
            default:
                selectedPart = 'showAll';
        }

        return selectedPart;
    };

    const [showKittyBodyPart, setShowKittyBodyPart] =
        useState<SelectedKittyBodyPart>('all');
    const [remoteKitty, setRemoteKitty] = useState<string>();

    const { colorMode } = useColorMode();
    const renderedSVGParent =
        useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if (!remoteKitty && showKittyBodyPart !== 'all') {
            // Fetch the SVG only when we select a body part
            fetch(kitty.image_url)
                .then((response) => response.text())
                .then((svg) => {
                    setRemoteKitty(svg);
                });
        }
        // eslint-disable-next-line
    }, [showKittyBodyPart !== 'all']);

    return {
        showBodyPartClass,
        showKittyBodyPart,
        setShowKittyBodyPart,
        remoteKitty,
        colorMode,
        renderedSVGParent,
    };
};

export default useCard;
