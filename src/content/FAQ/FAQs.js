import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Question: () => <>Is Chicago coming?</>,
            Answer: () => <>O-B-V-I-O-U-S-L-Y.</>,
        },
        {
            Question: () => <>Is there a bus to and from the wedding site?</>,
            Answer: () => (
                <>
                    Yes, because we want you to be able to party your face off.
                    There will be buses from Tortosa and L'Ampolla to Les Moles.
                    Schedule will be posted soon.
                </>
            ),
        },
        {
            Question: () => <>What languages do the guests speak?</>,
            Answer: () => (
                <>
                    Half of the people speak Catalan and Spanish (some of them
                    also know English). There will be people visiting from
                    Lebanon that speak Arabic and English. Guests from the
                    States speak English and maybe other languages.
                    Communication goes beyond language, so we're sure everyone
                    is going to have a blast regardless!
                </>
            ),
        },
        {
            Question: () => <>What is the dress code?</>,
            Answer: () => (
                <>
                    The wedding will be formal. We recommend long or elegant
                    cocktail dresses for ladies and suits for gents. White is
                    reserved for the bride. For the Pica-pica party casual
                    attire is preferred.
                </>
            ),
        },
        {
            Question: () => <>What is the weather like?</>,
            Answer: () => (
                <>
                    The weather during this time of year is usually sunny and in
                    the 80s during the day and 70s at night (ºF).
                </>
            ),
        },
    ]
}
