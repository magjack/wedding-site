import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Gifts</>,
        SubHeading: () => (
            <span>
                Your presence is more than enough and we're not expecting any
                gifts. If you would still like to give us a gift then any cash 
                contributions towards our honeymoon and future married life would be greatly appreciated.
                A postbox will be made available at the reception or bank details are available if easier. 
            </span>
        ),
    }
}
