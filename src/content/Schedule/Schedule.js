import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    'DAY': [
        {
            Title: () => <>Ceremony & Dinner</>,
            Date: () => <>Friday 7<sup>th</sup> of June 2024</>,
            Time: () => '1:30 pm',
            Location: () => <>Chatelherault </>,
            locationLink:
                "https://www.sllcweddings.co.uk/info/1/chatelherault_country_park",
            Address: () => (
                <>
                    <p>Carlisle Rd, Ferniegair</p>
                    <p>Hamilton</p>
                    <p>ML3 7UE</p>
                </>
            ),
            mapLink:
                "https://maps.app.goo.gl/tj7AxCXNTQ3ZCX8XA",
            Details: () => (
                <>
                    <p>
                        We will be starting the ceremony at 2pm. So please be seated no later than 1:30pm.
                        After there will then be a drinks reception while the couple go for photos.
                        There will then be some speeches and dinner.

                        A coach will then arrive at 6:30pm to take guests to the reception venue in Glasgow. 
                    </p>
                </>
            ),
        },
        {
            Title: () => <>Reception</>,
            Date: () => <>Friday 7<sup>th</sup> of June 2024</>,
            Time: () => '7:00 pm',
            Location: () => <>The Piping Centre</>,
            locationLink: "https://www.thepipingcentre.co.uk/",
            Address: () => (
                <>
                    <p>30-34 McPhater St</p>
                    <p>Glasgow</p>
                    <p>G4 0HW</p>
                </>
            ),
            mapLink:
                "https://maps.app.goo.gl/EQFSf6eEMHVW3Vua9",
            Details: () => (
                <>
                    <p>
                        We will continue the celebration where we will
                        be joined by additional guests at the piping centre for a reception. 
                    </p>
                </>
            ),
        },
    ],

    'NIGHT': [
    
        {
            Title: () => <>Reception</>,
            Date: () => <>Friday 7<sup>th</sup> of June 2024</>,
            Time: () => '19:15',
            Location: () => <>The Piping Centre</>,
            locationLink: "https://www.thepipingcentre.co.uk/",
            Address: () => (
                <>
                    <p>30-34 McPhater St</p>
                    <p>Glasgow</p>
                    <p>G4 0HW</p>
                </>
            ),
            mapLink:
                "https://maps.app.goo.gl/EQFSf6eEMHVW3Vua9",
            Details: () => (
                <>
                    <p>
                        If guests can arrvive for 7.15pm. The couple will be cutting the cake and having their first dance at 7.40pm.
                        There will be an evening buffet served at about 9.30 pm 
                    </p>
                    <p>Please RSVP with the link below by May 1<sup>st</sup></p>

                    <a href="https://forms.gle/1AVf5o2n3ciem7kg6" className="btn btn-primary" role="button">
                        RSVP Reception
                    </a>
                </>
            ),
        },
    ]
}
