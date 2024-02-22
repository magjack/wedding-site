import React from "react"
import Emoji from "react-emoji-render"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Content: () => (
            <>
                <p>
                    Contact us at{" "}
                    <a href="mailto:themagowans24@outlook.com">
                        themagowans24@outlook.com
                    </a>
                
                </p>
                <p>
                    <Emoji text="Made with 💚 in Glasgow by Jack and Emily." />
                </p>

            </>
        ),
    }
  
}
