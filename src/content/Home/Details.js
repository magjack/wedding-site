import React from "react"


import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span></span>,
        Date: () => (
            <div className="d-flex flex-column">
                <h1>
                    
                    Friday 7<sup>th</sup> of June 2024

                </h1>
                <h1>
                    
                    2PM

                </h1>

                <h1 className="Details_location__96lrq">
                    <a
                        href="https://maps.app.goo.gl/5pjB7PddMkEnceSQ6"
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <span>Chatelherault</span>
                    </a>
                </h1>
                <hr/>
                <br/>
                <br/>
                <h2>It will be worth the wait...</h2>
                <hr/>
                <br/>
                <br/>
                <h3>Please RSVP for Day time by April 8<sup>th</sup></h3>
                <a href="https://forms.gle/LMAVogmYCW1u3o6S8" className="btn btn-primary" role="button">
                    RSVP Ceremony
                </a>
                <hr/>
                <br/>
                <br/>
                <h3>Please RSVP for reception by May 1<sup>st</sup></h3>
                <a href="https://forms.gle/1AVf5o2n3ciem7kg6" className="btn btn-primary" role="button">
                        RSVP Reception
                </a>
            </div>
        ),
        Location: () => <span>Chatelherault </span>,
        locationLink: "https://maps.app.goo.gl/5pjB7PddMkEnceSQ6",
    }
}
