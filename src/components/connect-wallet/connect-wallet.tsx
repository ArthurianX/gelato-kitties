import wallet from '../../assets/wallet.svg';
import React, { useEffect, useState } from 'react';
import styles from './connect-wallet.module.scss';

const ConnectWallet = ({ metaConnectionCallback }: any): JSX.Element => {
    const [metaMaskAvailable, setMetaMaskAvailable] = useState(false);
    const [metaMaskConnected, setMetaMaskConnected] = useState<string>('');

    const tryToConnectMettaMask = async (): Promise<void> => {
        // @ts-ignore
        if (typeof window.ethereum !== 'undefined') {
            // @ts-ignore
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            setMetaMaskConnected(accounts[0]);
            metaConnectionCallback(accounts[0]);
        }
    };

    useEffect(() => {
        // @ts-ignore
        if (typeof window.ethereum !== 'undefined') {
            setMetaMaskAvailable(true);
        }
    }, []);

    return (
        <div className={styles.walletContainer}>
            <a href="javascript:;" onClick={tryToConnectMettaMask}>
                <img
                    src={wallet}
                    className={
                        metaMaskConnected
                            ? styles.walletIcon
                            : styles.walletIconDisabled
                    }
                    alt="logo"
                />
            </a>
            <div className={styles.actionText}>
                {!metaMaskAvailable && !metaMaskConnected && (
                    <span>MetaMask not installed!</span>
                )}
                {metaMaskAvailable && !metaMaskConnected && (
                    <a href="javascript:;" onClick={tryToConnectMettaMask}>
                        <span>Connect Wallet</span>
                    </a>
                )}
                {metaMaskConnected && (
                    <span>
                        Connected {metaMaskConnected.substr(0, 6) + '...'}
                    </span>
                )}
            </div>
        </div>
    );
};

export default ConnectWallet;
