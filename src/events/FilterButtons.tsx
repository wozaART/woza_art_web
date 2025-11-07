import React, { useRef } from 'react';
import './FilterButtons.css';

const FilterButtons = ({ filters, currentFilters, onFilterClick }) => {
    const scrollContainerRef = useRef(null);

    const buttonFilterStyle = (filterId) => {
        if (currentFilters.includes(filterId)) {
            return "button button--primary button--md";
        } else {
            return "button button--secondary button--md";
        }
    };

    return (
        <div className="filter-buttons-wrapper">
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
        </div>
    );
};

export default FilterButtons;