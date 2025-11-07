import React from 'react';

const OpeningTimes = ({ openingTimes }) => {
    let openingTimesTitle = null;

    if (openingTimes.length !== 0) {
        openingTimesTitle = <small className='padding-bottom-xs'> <b>Opening Times:</b></small>;
    }

    return (
        <div>
            {openingTimesTitle}
            <ul>
                {
                    openingTimes.map((time) => (
                        <li>
                            <small>{time}<br /></small>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
};

export default OpeningTimes;