import React, { useRef, useState } from 'react';
import './FilterButtons.css';

const FilterButtons = ({ filters, currentFilters, onFilterClick }) => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -150,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 150,
                behavior: 'smooth',
            });
        }
    };

    const buttonFilterStyle = (filterId) => {
        if (currentFilters.includes(filterId)) {
            return "button button--primary button--md";
        } else {
            return "button button--secondary button--md";
        }
    };


    return (
        <div className="filter-buttons-wrapper">
            <button className="scroll-arrow left" onClick={scrollLeft}><b>&lt;</b></button>
            <div className="filter-buttons-container" ref={scrollContainerRef}>
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        className={buttonFilterStyle(filter.id)}
                        onClick={() => onFilterClick(filter.id)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
            <button className="scroll-arrow right" onClick={scrollRight}><b>&gt;</b></button>
        </div>
    );
};

export default FilterButtons;