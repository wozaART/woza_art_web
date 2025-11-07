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
        description: (
            <>
                Solo Ceramic Exhibition by <Link to='docs/artists/cornelia-wessels'>Cornelia Wessels</Link>
            </>
        ),
        date: 'November 2, 2025 to November 24, 2025',
        openingDate: '2025-11-02',
        closingDate: '2025-11-24',
        year: '2025',
        openingTimes: ['Tuesday to Thursday (9am - 4pm)', 'Friday to Saturday (9am - 3pm)', 'Sunday (9am - 2pm)', 'Monday (Closed)'],
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
        openingTimes: ['Tuesday to Thursday (9am - 4pm)', 'Friday to Saturday (9am - 3pm)', 'Sunday (9am - 2pm)', 'Monday (Closed)'],
        imgUrl: 'jvh-gallery/dsbdwtv8d2g7lcme8vau.png',
        link: '/docs/events/jvh-gallery/beeste-2025',
        regions: ['pta'],
        tags: ['group']
    }, {
        title: 'When the Ravin Speaks',
        description: (
            <>
                Solo Exhibition by <Link to='docs/artists/mariaan-kotze'>Mariaan Kotze</Link>
            </>
        ),
        date: 'November 2, 2025 to November 24, 2025',
        openingDate: '2025-11-02',
        closingDate: '2025-11-24',
        year: '2025',
        openingTimes: ['Tuesday to Thursday (9am - 4pm)', 'Friday to Saturday (9am - 3pm)', 'Sunday (9am - 2pm)', 'Monday (Closed)'],
        imgUrl: 'jvh-gallery/hzaovghpkaftdympv3hs.png',
        link: '/docs/events/jvh-gallery/when-the-raven-speaks-mariaan-kotze',
        regions: ['pta'],
        tags: ['solo']
    }, {
        title: 'Traveling Light',
        description: (
            <>
                Solo Exhibition by <Link to='docs/artists/liekie-fouche'>Liekie Fouché</Link>
            </>
        ),
        date: 'November 2, 2025 to November 24, 2025',
        openingDate: '2025-11-02',
        closingDate: '2025-11-24',
        year: '2025',
        openingTimes: ['Tuesday to Thursday (9am - 4pm)', 'Friday to Saturday (9am - 3pm)', 'Sunday (9am - 2pm)', 'Monday (Closed)'],
        imgUrl: 'jvh-gallery/emo4wfekogxa9rugtxzi.png',
        link: '/docs/events/jvh-gallery/travelling-light-liekie-fouche',
        regions: ['pta'],
        tags: ['solo']
    }, {
        title: 'Restoration of the Image-bearer, a New Beginning',
        description: (
            <>
                Solo Exhibition by <Link to='docs/artists/joy-heneke'>Joy Heyneke</Link>
            </>
        ),
        date: 'November 2, 2025 to November 24, 2025',
        openingDate: '2025-11-02',
        closingDate: '2025-11-24',
        year: '2025',
        openingTimes: ['Tuesday to Thursday (9am - 4pm)', 'Friday to Saturday (9am - 3pm)', 'Sunday (9am - 2pm)', 'Monday (Closed)'],
        imgUrl: 'jvh-gallery/yoegbpkr6yp01zvzq9or.png',
        link: '/docs/events/jvh-gallery/restoration-of-the-image-bearer-joy-heyneke',
        regions: ['pta'],
        tags: ['solo']
    }, {
        title: 'Smokey Hounds and Inky Chicks',
        description: (
            <>
                Solo Exhibition by <Link to='docs/artists/sue-clark'>Sue Clark</Link>
            </>
        ),
        date: 'November 2, 2025 to November 24, 2025',
        openingDate: '2025-11-02',
        closingDate: '2025-11-24',
        year: '2025',
        openingTimes: ['Tuesday to Thursday (9am - 4pm)', 'Friday to Saturday (9am - 3pm)', 'Sunday (9am - 2pm)', 'Monday (Closed)'],
        imgUrl: 'jvh-gallery/dgdbik83iarvmyqcqhww.png',
        link: '/docs/events/jvh-gallery/smoky-hounds-and-inky-chicks-sue-clark',
        regions: ['pta'],
        tags: ['solo']
    }, {
        title: 'I Spy With My Little Eye',
        description: (
            <>
                We are delighted to invite you to the opening of <b>"I Spy With My Little Eye"</b>, an evocative group show featuring three talented South African artists:
                <ul>
                    <li><Link to='docs/artists/nirupa-sing'>Nirupa Sing</Link> presenting expressive mixed- media paintings that explore symbolic depths and human connection.</li>
                    <li><Link to='docs/artists/natasha-jacobs'>Natasha Jacobs</Link> exhibiting sensitive paintings that reflect memory, light, and the beauty in everyday moments.</li>
                    <li><Link to='docs/artists/natasha-jacobs'>Anne Pienaar</Link > showcasing drawings and watercolours, offering delicate observations and artistic immediacy.</li>
                </ul>
            </>
        ),
        date: 'Opening on 13 November 2025 at 18h00',
        openingDate: '2025-11-13',
        closingDate: '2025-12-05',
        year: '2025',
        openingTimes: ['Mondays to Thursdays: 09h00-17h30', 'Fridays & Saturdays: 09h00-12h00', 'Closed Sundays and Public Holidays'],
        imgUrl: 'alliance-francaise/i-spy-with-my-little-eye.png',
        link: '/docs/events/alliance-francaise/i-spy-with-my-little-eye',
        regions: ['pta'],
        tags: ['group']
    }, {
        title: 'Alliance Française de Pretoria - Open Call 2026',
        description: (
            <>
                The Alliance Française de Pretoria is pleased to invite visual artists to apply for our 2026 exhibitions. We are committed to showcasing thought-provoking, innovative, and inspiring work from both emerging and established artists. This open call welcomes all visual art mediums — including painting, sculpture, photography, digital art, illustration, installation, and mixed media.
                <br /><br />
                <b>Apply Online:</b> <Link href='https://pta.alliance.org.za/call-for-applications-visual-artists-for-2026-exhibitions/#/'>here</Link>
            </>
        ),
        date: 'Deadline: 31 March 2026',
        openingDate: '2025-11-04',
        closingDate: '2026-03-31',
        year: '2025',
        openingTimes: ['Mondays to Thursdays: 09h00-17h30', 'Fridays & Saturdays: 09h00-12h00', 'Closed Sundays and Public Holidays'],
        imgUrl: 'alliance-francaise/alliance-open-call-2026.png',
        link: '/docs/events/alliance-francaise/alliance-open-call-2026',
        regions: ['pta'],
        tags: ['open-call']
    }, {
        title: 'Shadows and Mirrors',
        description: (
            <>
                The Pretoria Art Museum invites you to a walkabout with <Link to='docs/artists/thomas-masingi'>Thomas Masingi</Link> and <Link to='docs/artists/neo-mlangeni'>Neo Mlangeni</Link>. An exhibition of photography, video art, digital art and mixed media drawings
            </>
        ),
        date: 'Opening on Saturday 11 October 2025 at 11h00',
        openingDate: '2025-10-11',
        closingDate: '2026-01-18',
        year: '2025',
        openingTimes: ['10:00 to 17h00 on Tuesdays to Sundays', 'Closed on Mondays and Public Holidays'],
        imgUrl: 'pretoria-art-museum/shadows-and-mirrors.png',
        link: '/docs/events/pretoria-art-museum/shadows-and-mirrors',
        regions: ['pta'],
        tags: ['group']
    }, {
        title: `The Green Tailor's Birthday Picnic at PAM`,
        description: (
            <>
                <Link href='https://thegreentailor.com'>The Green Tailor</Link> celebrates 11 years in business 🪡💃🔥 please join us for a picnic at the Pretoria Art Museum (cnr Francis Bard / Wessel Street, Pretoria). Everyone is welcome to come and enjoy the best art in the city.
            </>
        ),
        date: '15 November 2025, 10h00 - 14h00',
        openingDate: '2025-11-15',
        closingDate: '2025-11-15',
        year: '2025',
        openingTimes: ['10:00 to 17h00 on Tuesdays to Sundays', 'Closed on Mondays and Public Holidays'],
        imgUrl: 'pretoria-art-museum/the-green-tailor-turns-11.jpeg',
        link: '/docs/events/pretoria-art-museum/the-green-tailor-turns-11',
        regions: ['pta'],
        tags: ['group']
    }, {
        title: 'CALL OUT: TLHAGELLA INCUBATION PROGRAMME',
        description: (
            <>
                After the success of the inaugural Tlhagella Incubation Programme earlier this year, the Javett Art Centre at the University of Pretoria (Javett-UP) in partnership with the Canada Fund for Local Initiatives (CFLI) is doing it again!

                The Javett-UP is calling for applications for emerging under-represented artists to participate in the second edition of Tlagella Incubation Programme. The initiative seeks to nurture and empower emerging artists, providing professional practice and entrepreneurial skills and create career opportunities through participation in an exhibition, with networking and income-generating activities.
            </>
        ),
        date: 'Deadline: 6 November 2025 at 15:00',
        openingDate: '2025-10-21',
        closingDate: '2025-11-06',
        year: '2025',
        openingTimes: [],
        imgUrl: 'javett-up/tlhagella-incubation-programme.png',
        link: '/docs/events/javett-up/tlhagella-incubation-programme',
        regions: ['pta'],
        tags: ['open-call']
    }, {
        title: 'Multi Vision',
        description: (
            <>
                An exhibition by Ryan Loubser
            </>
        ),
        date: '31 October 2025 until 14 November 2025',
        openingDate: '2025-10-31',
        closingDate: '2026-11-14',
        year: '2025',
        openingTimes: [],
        imgUrl: 'trent-gallery/multi-vision-ryan-loubser.png',
        link: '/docs/events/trent-gallery/multi-vision-ryan-loubser',
        regions: ['pta'],
        tags: ['solo']
    }, {
        title: 'Moon - Open Call',
        description: (
            <>
                An open call for a group exhibition at Trent Gallery
            </>
        ),
        date: 'Deadline: 15 December 2025',
        openingDate: '2026-01-23',
        closingDate: '2025-12-15',
        year: '2025',
        openingTimes: [],
        imgUrl: 'trent-gallery/moon-open-call.jpeg',
        link: '/docs/events/trent-gallery/moon-open-call',
        regions: ['pta'],
        tags: ['open-call']
    }, {
        title: 'Nature Intended',
        description: (
            <>
                The exhibition, titled Nature Intended, is a collaborative presentation by artists <Link to='docs/artists/loeritha-saayman'>Loeritha Saayman</Link> and <Link to='docs/artists/linda-raath'>Linda Raath</Link>. This showcase features a thoughtful combination of two-dimensional artworks and ceramic pieces, highlighting the unique artistic visions of both creators.
            </>
        ),
        date: '4 October - 22 October 2025',
        openingDate: '2025-10-04',
        closingDate: '2025-10-22',
        year: '2025',
        openingTimes: ['Tuesdays to Fridays: 09:00 to 17:00', 'Saturdays: 09:00 to 13:00', 'Sundays, Mondays and Public Holidays: Closed'],
        imgUrl: 'pretoria-arts-association/nature-intended.jpg',
        link: '/docs/events/pretoria-arts-association/nature-intended',
        regions: ['pta'],
        tags: ['group']
    }, {
        title: 'Mini Masters - 2025',
        description: (
            <>
                An intimate showcase called Mini Masters at the Association of Arts Pretoria will be opened by <Link to='docs/artists/kevin-collins'>Kevin Collins</Link>, Chairperson of Ceramics Southern Africa, on Saturday 1 November 2025 at 11:00. The exhibition will be open to the public until 22 November.
            </>
        ),
        date: '1 November - 22 November 2025',
        openingDate: '2025-11-01',
        closingDate: '2025-11-22',
        year: '2025',
        openingTimes: ['Tuesdays to Fridays: 09:00 to 17:00', 'Saturdays: 09:00 to 13:00', 'Sundays, Mondays and Public Holidays: Closed'],
        imgUrl: 'pretoria-arts-association/mini-masters-2025.jpg',
        link: '/docs/events/pretoria-arts-association/mini-masters-2025',
        regions: ['pta'],
        tags: ['group']
    }
];