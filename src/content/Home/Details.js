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
              
                <h3>Please RSVP for reception (Evening guests only)</h3>
                <a href="https://forms.gle/1AVf5o2n3ciem7kg6" className="btn btn-primary" role="button">
                        RSVP Reception
                </a>
                <hr/>
                <br/>
                <br/>
                <h3>View and upload your photos here (requires google account to upload)</h3>
                <a href="https://photos.app.goo.gl/DcEJnpi3C4oYzgAK8" className="btn btn-primary" role="button">
                        Google photo upload
                </a>
                <hr/>
                <br/>
                <br/>
                <h3>If you don't have a google account you can upload here but your photos will not be visble straight away</h3>
                <a href="https://weduploader.com/upload/9a0AytchpGoZXttO" className="btn btn-primary" role="button">
                        Not Google photo upload
                </a>

            </div>
        ),
        Location: () => <span>Chatelherault </span>,
        locationLink: "https://maps.app.goo.gl/5pjB7PddMkEnceSQ6",
    }
}
