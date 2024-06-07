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
                A postbox will be made available at the reception or you can bank transfer to Emily Beattie. Sort code: 83-23-13 Account number: 10715494
            </span>
        ),
    }
}
