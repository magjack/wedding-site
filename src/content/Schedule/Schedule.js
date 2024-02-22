import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Ceremony & Dinner</>,
            Date: () => <>07/06/2024</>,
            Time: () => '13:30',
            Location: () => <>Chaterherault</>,
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
                        We will be starting Ceremony at 2pm. So please be seated no later than 1:45pm.
                        There will then be a drinks reception while the couple go for photos before
                        convening again for speaches and a meal. 

                        A coach will then arrive at 6:30pm to take guests to the reception venue in Glasgow. 
                    </p>
                </>
            ),
        },
        {
            Title: () => <>Reception</>,
            Date: () => <>07/06/2024</>,
            Time: () => '19:30',
            Location: () => <>The Piping Center</>,
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
                        We will continue the celebration being joined by additional guests at the piping center for a reception. 
                    </p>
                </>
            ),
        },
    ]
}
