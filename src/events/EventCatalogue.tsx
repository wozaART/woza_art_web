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

    const regions = [
        { id: 'jhb', label: 'Johannesburg' },
        { id: 'pta', label: 'Pretoria' },
    ];

    const timelineTags = [
        { id: 'current', label: 'Current Exhibitions' },
        { id: 'past', label: 'Past Exhibitions' },
        { id: 'upcoming', label: 'Upcoming Exhibitions' },
    ];

    const categoryTags = [
        { id: 'open_calls', label: 'Open Calls' },
        { id: 'group', label: 'Group Exhibition' },
        { id: 'solo', label: 'Solo Exhibition' },
    ];

    const allTags = [
        ...timelineTags,
        ...categoryTags,
    ];

    const allFilters = [
        ...regions,
        ...allTags,
    ]

    function filterMatchingRegions(regionId) {
        if (filters.includes(regionId)) {
            const newFilteredRegions = filters.filter(tag => tag !== regionId);
            setFilters(newFilteredRegions);
        } else {
            setFilters(regions => [...regions, regionId]);
        }
    }

    function filterMatchingTags(filterId) {
        if (filters.includes(filterId)) {
            const newFilteredTags = filters.filter(tag => tag !== filterId);
            setFilters(newFilteredTags);
        } else {
            setFilters([...filters, filterId]);
        }
    }

    function filterCurrentExhibitions(item: EventItem): boolean {
        const currentDate = new Date();
        const openingDate = new Date(item.openingDate);
        const closingDate = new Date(item.closingDate);
        return openingDate < currentDate && closingDate > currentDate;
    }

    function filterPastExhibitions(item: EventItem): boolean {
        const currentDate = new Date();
        const closingDate = new Date(item.closingDate);
        return closingDate < currentDate;
    }

    function filterUpcomingExhibitions(item: EventItem): boolean {
        const currentDate = new Date();
        const openingDate = new Date(item.openingDate);
        return openingDate > currentDate;
    }

    const handleFilterSelection = (filterId) => {
        filterMatchingRegions(filterId);
        filterMatchingTags(filterId);
    };

    const filteredItems = EventList.filter((item) => {
        const filteredTags = filters.filter(tag => allTags.map(i => i.id).includes(tag));
        const filteredRegions = filters.filter(region => regions.map(i => i.id).includes(region));

        console.log('filteredTags', filteredTags);
        console.log('filteredRegions', filteredRegions);

        const isSubset = (array1, array2) =>
            array2.every((element) => array1.includes(element));

        const containsTags = () => {
            var isCurrentExhibition = false;
            var isPastExhibition = false;
            var isUpcomingExhibition = false;

            const hasCurrentExhibitionTag = filters.includes('current');
            const hasPastExhibitionTag = filters.includes('past');
            const hasUpcomingExhibitionTag = filters.includes('upcoming');

            if (hasCurrentExhibitionTag) {
                console.log('hasCurrentExhibitionTag', isCurrentExhibition);
                isCurrentExhibition = filterCurrentExhibitions(item);
            }
            if (hasPastExhibitionTag) {
                console.log('hasPastExhibitionTag', isPastExhibition);
                isPastExhibition = filterPastExhibitions(item);
            }
            if (hasUpcomingExhibitionTag) {
                console.log('hasUpcomingExhibitionTag', isUpcomingExhibition);
                isUpcomingExhibition = filterUpcomingExhibitions(item);
            }

            const filteredCategoryTags = filters.filter(tag => categoryTags.map(i => i.id).includes(tag));
            const filteredTimelineTags = filters.filter(tag => timelineTags.map(i => i.id).includes(tag));
            const containsCategoryTags = isSubset(item.tags, filteredCategoryTags);

            console.log('containsCategoryTags', containsCategoryTags);
            console.log('filteredTimelineTags', filteredTimelineTags);

            if (filteredCategoryTags.length !== 0 && filteredTimelineTags.length !== 0) {
                return containsCategoryTags && (isCurrentExhibition || isPastExhibition || isUpcomingExhibition);
            } else if (filteredCategoryTags.length == 0 && filteredTimelineTags.length !== 0) {
                return (isCurrentExhibition || isPastExhibition || isUpcomingExhibition);
            } else if (filteredTags.length !== 0 && filteredTimelineTags.length === 0) {
                return containsCategoryTags;
            } else {
                return true;
            }
        }

        const containsRegions = () => {
            return isSubset(filteredRegions, item.regions);
        };

        console.log('containsTags', containsTags());
        console.log('containsRegions', containsRegions());

        if (filteredTags.length !== 0 && filteredRegions.length !== 0) {
            console.log('containsTags && containsRegions');
            return containsTags() && containsRegions();
        } else if (filteredTags.length === 0 && filteredRegions.length !== 0) {
            console.log('containsRegions only');
            return containsRegions();
        } else if (filteredTags.length !== 0 && filteredRegions.length === 0) {
            console.log('containsTags only');
            return containsTags();
        } else {
            return true;
        }
    });

    function sortedAndFilteredItems(): EventItem[] {
        console.log('filteredItems', filteredItems);

        if (filters.length === 0) {
            return [...EventList].sort(sortItemsByDateDesc);
        } else {
            console.log(filters);
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
                    <FilterButtons filters={allFilters} currentFilters={filters} onFilterClick={handleFilterSelection} />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className={styles.features}>
                        {
                            sortedAndFilteredItems().map((props, idx) =>
                                <div key={idx} className={styles.featureItem}>
                                    <Event {...props} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </section >
        </div>
    );
}
