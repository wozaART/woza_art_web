import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import IdealImage from '@theme/IdealImage';
import styles from './styles.module.css';
import { ArtistItem, ArtistList } from './Artists';

function Artist({ fullname, website, link }: ArtistItem) {
    return (
        <div className={styles.flexContainer}>
            <div className='row'>
                <div className={styles.textContainer}>
                    <p>{fullname} - <small className='padding-left-xs'>{website}</small></p>
                    <a href={link}>
                        <small>More info...</small>
                    </a>
                </div>
            </div>
            <Link to={link}>
                <div className={styles.imageContainer}>
                    <IdealImage quality={20} img={`https://tcaspiuafowfizfjesvj.supabase.co/storage/v1/object/public/artist-images/${imgUrl}`} />
                </div>
            </Link>
        </div >
    );
}

export default function ArtistCatalogue(): ReactNode {
    return (
        <section>
            <div className="container">
                <div className={styles.features}>
                    {
                        ArtistList.map((props, idx) => (
                            <div className={styles.featureItem}>
                                <Artist key={idx} {...props} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    );
}

