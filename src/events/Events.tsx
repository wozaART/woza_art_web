export type EventItem = {
    title: string;
    description: string;
    date: string;
    openingDate: string;
    year: string;
    openingTimes: string[];
    imgUrl: string;
    link: string;
    tags: string[];
};

export const EventList: EventItem[] = [
    {
        title: 'USM: Colour, Form, and Function in Dialogue',
        description: "Group show with USM Modular Furniture at Candice Berman Gallery",
        date: '25 September - 5 November 2025',
        openingDate: '2025-09-25',
        year: '2025',
        openingTimes: ['Mon – Fri: 9am – 5.30pm', 'Sat: 9am – 4.30pm', 'Sun: Closed'],
        imgUrl: 'candice-berman-gallery/usm-installation-7.webp',
        link: '/docs/events/candice-berman-gallery/usm-group-show',
        tags: ['jhb']
    }, {
        title: 'Abstract and the Absurd 2025',
        description: "Group Exhibition featuring Cyrille Chamayou, Andrew Mogridge, Claire Lichtenstein, David Kuijers, Jack Cohen, Jarrod Berman, SYNC, Mark Swart, Wehrner Lemmer, Andrew Jowdy Collins, Norman Catherine, Thapo Sekaoila, Helen van Stolk and Jasmine Jagger at Candice Berman Gallery, Johannesburg",
        date: '4 October - 7 November 2025',
        openingDate: '2025-10-04',
        year: '2025',
        openingTimes: ['Mon – Fri: 9am – 5.30pm', 'Sat: 9am – 4.30pm', 'Sun: Closed'],
        imgUrl: 'candice-berman-gallery/cbg-inst-oct-3.webp',
        link: '/docs/events/candice-berman-gallery/abstract-and-the-absurb-2025',
        tags: ['jhb']
    }, {
        title: 'A Christmas exhibition',
        description: "Group Exhibition by Bronwen Schalkwyk, Elisca du Toit, Kobus Walker, Koos Bronkhorst, Lize Kampman, Magdel van Rooyen, and more …",
        date: 'Sunday 9 November 2025 at 11h30 – 14h00 and will conclude on Saturday 13 December 2025',
        openingDate: '2025-09-11',
        year: '2025',
        openingTimes: ['Tuesday – Saturday, 09h00 – 17h00', 'Closed on Sundays and Mondays'],
        imgUrl: 'tina-skukan-gallery/a-christmas-exhibition-2025-web.jpg',
        link: '/docs/events/tina-skukan-gallery/a-christmas-exhibition-2025',
        tags: ['pta']
    },
];