import React from "react"

import { LANGUAGE } from "actions/constants"

const hashtag = "jackandemily"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span>Emily and Jack are getting married!</span>,
        Date: () => (
            <div className="d-flex flex-column">
                <div>
                    
                    07/06/2024 2PM

                </div>
                <div>It will be worth the wait...</div>
            </div>
        ),
        Location: () => <span>Chaterherault</span>,
        locationLink: "https://maps.app.goo.gl/5pjB7PddMkEnceSQ6",
        hashtag,
    }
}
