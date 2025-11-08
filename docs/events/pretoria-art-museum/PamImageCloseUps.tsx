import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import IdealImage from '@theme/IdealImage';

function CloseUpArtwork(props) {
    return (
        <div className={clsx('col col--6 padding--md')}>
            <IdealImage img={`https://tcaspiuafowfizfjesvj.supabase.co/storage/v1/object/public/event-images/pretoria-art-museum/${props.imgUrl}`} />
        </div >
    );
}

export function TheGreenTailorTurns11CloseUpGrid(): ReactNode {
    const closeups = [
        'the-green-tailor-turns-11_1.png',
        'the-green-tailor-turns-11_2.png',
        'the-green-tailor-turns-11_3.png',
        'the-green-tailor-turns-11_4.png',
        'the-green-tailor-turns-11_5.png',
    ];

    return (
        <div className="container">
            <div className={styles.closeupFlexContainer}>
                {closeups.map((imgUrl: string) => (
                    <CloseUpArtwork imgUrl={imgUrl} />
                ))}
            </div>
        </div>
    );
}
