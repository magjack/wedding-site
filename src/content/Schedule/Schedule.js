import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Welcome &ldquo;Pica-pica&ldquo;</>,
            Date: () => <>TBD</>,
            Time: () => null,
            Location: () => <>La Barraca</>,
            locationLink:
                "https://www.tripadvisor.com/Restaurant_Review-g670769-d6540538-Reviews-Restaurant_La_Barraca-L_Ampolla_Terres_de_l_Ebre_Province_of_Tarragona_Catalonia.html",
            Address: () => (
                <>
                    <p>Passeig de l'Arenal, s/n</p>
                    <p>43895 L'Ampolla, Catalonia, Spain</p>
                </>
            ),
            mapLink:
                "https://www.google.com/maps/place/Restaurant+La+Barraca/@40.803093,0.699406,15z/data=!4m5!3m4!1s0x0:0x4c06a459a2cf6826!8m2!3d40.803093!4d0.699406",
            Details: () => (
                <>
                    <p>
                        There will be a few light bites in addition to drinks by
                        the Mediterranean. Stop by whenever works for you
                        between the indicated hours!
                    </p>
                </>
            ),
        },
        {
            Title: () => <>Wedding</>,
            Date: () => <>TBD</>,
            Time: () => null,
            Location: () => <>Les Moles</>,
            locationLink: "http://www.lesmoles.com/index.asp?i=en",
            Address: () => (
                <>
                    <p>Carretera de la Sénia, Km. 2</p>
                    <p>43550 Ulldecona, Catalonia, Spain</p>
                </>
            ),
            mapLink:
                "https://www.google.com/maps/place/Les+Moles/@40.6038903,0.4204865,15z/data=!4m5!3m4!1s0x0:0xc7db2358e345721f!8m2!3d40.6038903!4d0.4204865",
            Details: () => (
                <>
                    <p>
                        The ceremony, dinner and party will take place at Les
                        Moles, a family - run business that partly occupies an
                        old farm that takes its names from the mill stones
                        carved out of the local quarry (and it has a Michelin
                        star!).
                    </p>
                </>
            ),
        },
    ]
}
