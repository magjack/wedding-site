import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Gifts</>,
        SubHeading: () => (
            <span>
                Your presence is more than enough and we're not expecting any
                gifts. If you would still like to give us a gift then we would love to receive any donations towards our honeymoon 
                and future married life. A postbox will be made available at the reception or reach for transfer details
            </span>
        ),
    }
}
