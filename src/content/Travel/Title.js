import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>
                We're getting married in a region called{" "}
                <strong>Terres de l'Ebre</strong>. Here's info on how to get
                there and where to stay. There are bus and train options;
                however, if you want to enjoy the area, we recommend to rent a
                car.
            </>
        ),
    }
}
