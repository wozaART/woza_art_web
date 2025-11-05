import type { ReactNode } from 'react';
import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import IdealImage from '@theme/IdealImage';
import styles from './styles.module.css';
import { EventItem, EventList } from './Events';
import FilterButtons from './FilterButtons';

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

export default function EventCatalogue({ items }): ReactNode {
    const [filters, setFilters] = useState([]);

    const categories = [
        { id: 'jhb', label: 'Johannesburg' },
        { id: 'pta', label: 'Pretoria' },
        { id: 'current', label: 'Current Exhibitions' },
        { id: 'past', label: 'Past Exhibitions' },
        { id: 'upcoming', label: 'Upcoming Exhibitions' },
        { id: 'open_calls', label: 'Open Calls' },
        { id: 'group', label: 'Group Exhibition' },
        { id: 'solo', label: 'Solo Exhibition' },
    ];

    const handleFilterSelection = (filterId) => {
        console.log('Filter Button Tapped')
        console.log(filters)
        if (filters.includes(filterId)) {
            const newFilters = filters.filter(tag => tag !== filterId);
            setFilters(newFilters);
        } else {
            setFilters(filters => [...filters, filterId]);
        }
    };

    const filteredItems = EventList.filter(function (item) {
        const filteredTags = item.tags.filter(tag => filters.includes(tag));
        if (filteredTags.length === 0) {
            return false;
        }
        return true;
    });

    function sortedAndFilteredItems(): EventItem[] {
        if (filteredItems.length === 0) {
            return [...EventList].sort(sortItemsByDateDesc);
        } else {
            return [...filteredItems].sort(sortItemsByDateDesc);
        }
    }

    function sortItemsByDateDesc(a, b) {
        const _a = new Date(a.openingDate)
        const _b = new Date(b.openingDate)
        return _a.getTime() - _b.getTime();
    }

    return (
        <div>
            <section className="padding-bottom--lg">
                <div className="container">
                    <FilterButtons filters={categories} currentFilters={filters} onFilterClick={handleFilterSelection} />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className={styles.features}>
                        {
                            sortedAndFilteredItems().map((props, idx) =>
                                <div className={styles.featureItem}>
                                    <Event key={idx} {...props} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </section >
        </div>
    );
}
