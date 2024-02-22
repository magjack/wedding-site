import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        schedule: () => <span>The Day</span>,
        travel: () => <span>Travel</span>,
        thingsToDo: () => <span>Things to Do</span>,
        faq: () => <span>FAQs</span>,
        registry: () => <span>Gifts</span>,
        rsvp: () => <span>RSVP</span>,
        manageRsvp: () => <span>Manage RSVP</span>,
    }
}
