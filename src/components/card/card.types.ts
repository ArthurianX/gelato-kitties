import { KittyCardInterface } from '../../services/fetch-cards';

export type SelectedKittyBodyPart = 'all' | 'eyes' | 'mouth' | 'body' | 'tail';

export interface KittyCardProps {
    kitty: KittyCardInterface;
    fixedSize: boolean;
    walletConnected: string;
}
