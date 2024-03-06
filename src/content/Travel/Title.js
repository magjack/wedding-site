import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>
                The Ceremony and Dinner will be held at Chatelherault Country Park in Hamilton which is about a 20 minute drive from glasgow city center. 
                We are asking guests to make their own way there for the Ceremony.
                It is easily accessible by public transport detailed below.
                A taxi is also a viable option.

                There will then be a coach provide to transport guests to the reception venue in the middle of Glasgow City. 

                If anyone is staying over in Glasgow there are plenty of hotel available near the piping center
            </>
        ),
    }
}
