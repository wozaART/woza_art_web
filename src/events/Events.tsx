import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';

export type EventItem = {
    title: string;
    description: ReactNode;
    date: string;
    openingDate: string;
    closingDate: string;
    year: string;
    openingTimes: string[];
    imgUrl: string;
    link: string;
    regions: string[];
    tags: string[];
};

export const EventList: EventItem[] = [
    {
        title: 'USM: Colour, Form, and Function in Dialogue',
        description: "Group show with USM Modular Furniture at Candice Berman Gallery",
        date: '25 September - 5 November 2025',
        openingDate: '2025-09-25',
        closingDate: '2025-11-05',
        year: '2025',
        openingTimes: ['Mon – Fri: 9am – 5.30pm', 'Sat: 9am – 4.30pm', 'Sun: Closed'],
        imgUrl: 'candice-berman-gallery/usm-installation-7.webp',
        link: '/docs/events/candice-berman-gallery/usm-group-show',
        regions: ['jhb'],
        tags: [],
    }, {
        title: 'Abstract and the Absurd 2025',
        description: (
            <>
                Group Exhibition featuring <Link to='docs/artists/cyriller-chamayou'>Cyrille Chamayou</Link>, <Link to='docs/artists/andrew-mogridge'>Andrew Mogridge</Link>, <Link to='docs/artists/claire-lichtenstein'>Claire Lichtenstein</Link>, <Link to='docs/artists/david-kuijers'>David Kuijers</Link>, <Link to='docs/artists/jack-cohen'>Jack Cohen</Link>, <Link to='docs/artists/jarrod-berman'>Jarrod Berman</Link>, <Link to='docs/artists/sync'>SYNC</Link>, <Link to='docs/artists/mark-swart'>Mark Swart</Link>, <Link to='docs/artists/wehrner-lemmer'>Wehrner Lemmer</Link>, <Link to='docs/artists/andrew-jowdy-collins'>Andrew Jowdy Collins</Link>, <Link to='docs/artists/norman-catherine'>Norman Catherine</Link>, <Link to='docs/artists/thapo-sekaoila'>Thapo Sekaoila</Link>, <Link to='docs/artists/helen-van-stolk'>Helen van Stolk</Link> and <Link to='docs/artists/jasmine-jagger'>Jasmine Jagger</Link> at Candice Berman Gallery, Johannesburg
            </>
        ),
        date: '4 October - 7 November 2025',
        openingDate: '2025-10-04',
        closingDate: '2025-11-07',
        year: '2025',
        openingTimes: ['Mon – Fri: 9am – 5.30pm', 'Sat: 9am – 4.30pm', 'Sun: Closed'],
        imgUrl: 'candice-berman-gallery/cbg-inst-oct-3.webp',
        link: '/docs/events/candice-berman-gallery/abstract-and-the-absurb-2025',
        regions: ['jhb'],
        tags: ['group']
    }, {
        title: 'A Christmas exhibition',
        description: (
            <>
                Group Exhibition by <Link to='docs/artists/bronwen-schalkwyk'>Bronwen Schalkwyk</Link>, <Link to='docs/artists/elisca-du-toit'>Elisca du Toit</Link>, <Link to='docs/artists/kobus-walker'>Kobus Walker</Link>, <Link to='docs/artists/koos-bronkhorst'>Koos Bronkhorst</Link>, <Link to='docs/artists/lize-kampman'>Lize Kampman</Link>, <Link to='docs/artists/magdel-van-rooyen'>Magdel van Rooyen</Link>, and more …
            </>
        ),
        date: 'Sunday 9 November 2025 at 11h30 – 14h00 and will conclude on Saturday 13 December 2025',
        openingDate: '2025-11-09',
        closingDate: '2025-12-13',
        year: '2025',
        openingTimes: ['Tuesday – Saturday, 09h00 – 17h00', 'Closed on Sundays and Mondays'],
        imgUrl: 'tina-skukan-gallery/a-christmas-exhibition-2025-web.jpg',
        link: '/docs/events/tina-skukan-gallery/a-christmas-exhibition-2025',
        regions: ['pta'],
        tags: ['group']
    }, {
        title: 'Conservation',
        description: "Solo Ceramic Exhibition by Cornelia Wessels",
        date: 'November 2, 2025 to November 24, 2025',
        openingDate: '2025-11-02',
        closingDate: '2025-11-24',
        year: '2025',
        openingTimes: ['Tuesday to Thursday (9am - 4pm)', 'Friday to Saturday (9am - 3pm)', 'Sunday(9am - 2pm)', 'Monday(Closed)'],
        imgUrl: 'jvh-gallery/tvuqezq9n8vyjuhzd5qb.png',
        link: '/docs/events/jvh-gallery/conversation-cornelia-wessels',
        regions: ['pta'],
        tags: ['solo']
    }, {
        title: 'Beeste',
        description: "Group Exhibition at Johann van Heerden's Art Gallery",
        date: 'November 2, 2025 to November 24, 2025',
        openingDate: '2025-11-02',
        closingDate: '2025-11-24',
        year: '2025',
        openingTimes: ['Tuesday to Thursday (9am - 4pm)', 'Friday to Saturday (9am - 3pm)', 'Sunday(9am - 2pm)', 'Monday(Closed)'],
        imgUrl: 'jvh-gallery/dsbdwtv8d2g7lcme8vau.png',
        link: '/docs/events/jvh-gallery/beeste-2025',
        regions: ['pta'],
        tags: ['group']
    },
];