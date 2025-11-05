import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import IdealImage from '@theme/IdealImage';
import styles from './styles.module.css';
import { EventItem, EventList } from './Events';

function Event({ title, description, date, year, openingTimes, imgUrl, link }: EventItem) {
    return (
        <div className={styles.flexContainer}>
            <div className='row'>
                <div className={styles.textContainer}>
                    <h3>{title}</h3>
                    <small className='padding-bottom--xs'>{description}</small>
                    <small className='padding-bottom-xs'><b>Date:</b> {date}</small>
                    <small className='padding-bottom-xs'> <b>Opening Times:</b>
                    </small>
                    <ul>
                        {
                            openingTimes.map((time) => (
                                <li>
                                    <small>{time}<br /></small>
                                </li>
                            ))
                        }
                    </ul>
                    <a href={link}>
                        <small>More info...</small>
                    </a>
                </div>
            </div>
            <Link to={link}>
                <div className={styles.imageContainer}>
                    <IdealImage quality={20} img={`https://tcaspiuafowfizfjesvj.supabase.co/storage/v1/object/public/event-images/${imgUrl}`} />
                </div>
            </Link>
        </div >
    );
}

export default function EventCatalogue(): ReactNode {
    return (
        <section>
            <div className="container">
                <div className={styles.features}>
                    {
                        EventList.map((props, idx) => (
                            <div className={styles.featureItem}>
                                <Event key={idx} {...props} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    );
}

