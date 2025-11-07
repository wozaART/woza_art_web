import type { ReactNode } from 'react';
import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import IdealImage from '@theme/IdealImage';
import styles from './styles.module.css';
import { EventItem, EventList } from './Events';
import FilterButtons from './FilterButtons';
import OpeningTimes from './OpeningTimes';

function Event({ title, description, date, year, openingTimes, imgUrl, link }: EventItem) {
    return (
        <div className={styles.flexContainer}>
            <div className='row'>
                <div className={styles.textContainer}>
                    <h3>{title}</h3>
                    <small className='padding-bottom--xs'>{description}</small>
                    <small className='padding-bottom-xs'><b>Date:</b> {date}</small>
                    <OpeningTimes openingTimes={openingTimes}></OpeningTimes>
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
        { id: 'open-call', label: 'Open Calls' },
        { id: 'group', label: 'Group Exhibition' },
        { id: 'solo', label: 'Solo Exhibition' },
    ];

    const weeklyTags = [
        { id: 'opening-this-week', label: 'Opening this week' },
        { id: 'opening-next-week', label: 'Opening next week' },
        { id: 'closing-this-week', label: 'Closing this week' },
        { id: 'closing-next-week', label: 'Closing next week' },
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

    function getCurrentSundayEndDate(): Date {
        const today = new Date();
        // 0 for Sunday, 1 for Monday, etc.
        const currentDay = today.getDay();

        const sundayEndDate = new Date(today);

        if (currentDay !== 0) {
            // If today is not Sunday, add the remaining days to reach Sunday
            sundayEndDate.setDate(today.getDate() + (7 - currentDay));
        } else {
            // If today is Sunday, sundayEndDate already represents the current Sunday
            // To get the *end* of the day, you might want to set the time to 23:59:59.999
            sundayEndDate.setHours(23, 59, 59, 999);
        }
        return sundayEndDate;
    }

    function getNextWeekSundayEndDate(): Date {
        const nextWeekSundayEndDate = new Date();
        const currentSundayEndDate = getCurrentSundayEndDate();
        nextWeekSundayEndDate.setDate(currentSundayEndDate.getDate() + 7);
        return nextWeekSundayEndDate;
    }

    function filterThisWeeksOpeningExhibitions(item: EventItem): boolean {
        const today = new Date();
        const sundayEndDate = getCurrentSundayEndDate();
        const openingDate = new Date(item.openingDate);
        return openingDate > today && openingDate < sundayEndDate;
    }

    function filterThisWeeksClosingExhibitions(item: EventItem): boolean {
        const today = new Date();
        const sundayEndDate = getCurrentSundayEndDate();
        const closingDate = new Date(item.closingDate);
        return closingDate > today && closingDate < sundayEndDate;
    }

    function filterNextWeeksOpeningExhibitions(item: EventItem): boolean {
        const sundayEndDate = getCurrentSundayEndDate();
        const nextWeekSundayEndDate = getNextWeekSundayEndDate();
        const openingDate = new Date(item.openingDate);
        return openingDate > sundayEndDate && openingDate < nextWeekSundayEndDate;
    }

    function filterNextWeeksClosingExhibitions(item: EventItem): boolean {
        const sundayEndDate = getCurrentSundayEndDate();
        const nextWeekSundayEndDate = getNextWeekSundayEndDate();
        const closingDate = new Date(item.closingDate);
        return closingDate > sundayEndDate && closingDate < nextWeekSundayEndDate;
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

    function weeklyFilteredItems(items: EventItem[]): EventItem[] {
        const hasOpeningThisWeekTag = filters.includes('opening-this-week');
        const hasOpeningNextWeekTag = filters.includes('opening-next-week');
        const hasClosingThisWeekTag = filters.includes('closing-this-week');
        const hasClosingNextWeekTag = filters.includes('closing-next-week');

        if (hasOpeningThisWeekTag) {
            console.log('hasOpeningThisWeekTag', hasOpeningThisWeekTag);
            return items.filter(item => filterThisWeeksOpeningExhibitions(item));
        }

        if (hasOpeningNextWeekTag) {
            console.log('hasOpeningNextWeekTag', hasOpeningNextWeekTag);
            return items.filter(item => filterNextWeeksOpeningExhibitions(item));
        }

        if (hasClosingThisWeekTag) {
            console.log('hasClosingThisWeekTag', hasClosingThisWeekTag);
            return items.filter(item => filterThisWeeksClosingExhibitions(item));
        }

        if (hasClosingNextWeekTag) {
            console.log('hasClosingNextWeekTag', hasClosingNextWeekTag);
            return items.filter(item => filterNextWeeksClosingExhibitions(item));
        }

        return items;
    }

    function sortedAndFilteredItems(): EventItem[] {
        console.log('filteredItems', filteredItems);

        const updatedFilteredItems = weeklyFilteredItems(filteredItems);

        console.log('updatedFilteredItems', updatedFilteredItems);

        if (filters.length === 0) {
            return [...EventList].sort(sortItemsByDateDesc);
        } else {
            console.log(filters);
            return [...updatedFilteredItems].sort(sortItemsByDateDesc);
        }
    }

    function sortItemsByDateDesc(a, b) {
        const _a = new Date(a.openingDate)
        const _b = new Date(b.openingDate)
        return _b.getTime() - _a.getTime();
    }

    return (
        <div>
            <section className="padding-bottom--lg">
                <div className="container">
                    <div className="padding-bottom--md">
                        <FilterButtons filters={allFilters} currentFilters={filters} onFilterClick={handleFilterSelection} />
                    </div>
                    <FilterButtons filters={weeklyTags} currentFilters={filters} onFilterClick={handleFilterSelection} />
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
