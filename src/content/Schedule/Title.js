import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>The Day</>,
        SubHeading: () => (
            <span>
                Here's what to expect during our special day
            </span>
        ),
    }
}
