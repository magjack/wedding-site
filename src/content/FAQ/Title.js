import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Questions?</>,
        SubHeading: () => (
            <>
                If you have any other questions other than what we’ve listed
                here, please reach out to{" "}
                <a href="mailto:hola@lledoisalim.com">hola@lledoisalim.com</a>.
            </>
        ),
    }
}
