import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Question: () => <>Is there provided transport to the ceremony venue</>,
            Answer: () => <>No we are asking you to get yourself to the ceremony.
                            A coach will be taking you back to Glasgow City Center for the reception</>,
        },
        {
            Question: () => <>Can I bring a plus one?</>,
            Answer: () => (
                <>
                    Unfortunately we are very limited for numbers so we need to stick to the people on the invite for the time being. 
                    If some people are unable to make it we can then consider some plus ones.
                </>
            ),
        },
        {
            Question: () => <>Are kids invited?</>,
            Answer: () => (
                <>
                    Children are welcome to join us, but due to venue space limitations, we are only able to accommodate those explicitly named on the invitation.
                    We appreciate your understanding and cooperation in helping us manage the event smoothly. Again if we has some people unable to join then we can consider inviting more. 
                    Please note we made this invitation list a few years ago and alot of new faces have been appearing since. 
                </>
            ),
        },
        {
            Question: () => <>What is the dress code?</>,
            Answer: () => (
                <>
                    The wedding will be formal. We recommend long or elegant
                    cocktail dresses for ladies and kilts/suits for gents.
                    It will be the start of June and we are 
                    hoping for warm weather.
                    White is reserved for the bride.
                </>
            ),
        },
        {
            Question: () => <>What is the weather like?</>,
            Answer: () => (
                <>
                    Hopefully good but you know Scotland. 
                </>
            ),
        },
    ]
}
