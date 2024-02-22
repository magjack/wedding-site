import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>
                The Ceremony and Dinner will be held at Chaterhault Country Park in Hamilton which is about a 20 minute drive from glasgow city center. 
                We are asking guest to make there own way there for the Ceremony.
                It is easily accessible by public transport with a train station you can get to from Glasgow Central and a bus station located just outside the park.
                A taxi is also a viable option.

                There will then be a coach provide to transport guest to the reception venue in the middle of Glasgow City. 

                If anyone is staying over in Glasgow there are plenty of hotel available near the piping center
            </>
        ),
    }
}
