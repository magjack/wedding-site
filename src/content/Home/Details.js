import React from "react"
import Button from 'react-bootstrap/Button';

import { LANGUAGE } from "actions/constants"

const hashtag = "jackandemily"

const handleRSVP = () => {
    // Assuming you want to navigate to an external RSVP link
    window.location.href = 'https://forms.gle/LMAVogmYCW1u3o6S8';
  };



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
                <hr/>
                <br/>
                <br/>
                <h2>It will be worth the wait...</h2>
                <hr/>
                <br/>
                <br/>
                <h3>Please RSVP by April 1st</h3>
                <Button variant="primary" onClick={handleRSVP}>
                    RSVP Now
                </Button>
            </div>
        ),
        Location: () => <span>Chatelherault </span>,
        locationLink: "https://maps.app.goo.gl/5pjB7PddMkEnceSQ6",
        hashtag,
    }
}
