import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Type: () => <>Terres de l'Ebre</>,
            Details: () => (
                <>
                    <p>
                        Les Terres de l'Ebre is located in the south-west of
                        Catalonia, in the southern part of river Ebre. It is a
                        UNESCO Biosphere Reserve since 2013. We recommend to
                        stay either in Tortosa or L'Ampolla.
                    </p>
                </>
            ),
            link: "https://terresdelebre.travel/en",
        },
        {
            Type: () => <>Flight</>,
            Title: () => <>BCN</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>Barcelona is the best place to fly into.</p>
                </>
            ),
            link:
                "https://www.google.com/flights?lite=0#flt=SEA./m/01f62.2020-08-01*/m/01f62.SEA.2020-08-10;c:USD;e:1;sd:1;t:f",
        },
        {
            Type: () => <>Car</>,
            Title: () => <>BCN</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>We recommend to rent a car from Barcelona Airport.</p>
                </>
            ),
            link:
                "https://www.barcelona-airport.com/eng/car-hire.php#/searchcars",
        },
        {
            Type: () => <>Train</>,
            Title: () => <>Tortosa/L'Ampolla</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Renfe is the state-owned company which operates freight
                        and passenger trains in Spain. There are trains from the
                        airport to the city of Barcelona, and from there to
                        Tortosa and L'Ampolla.
                    </p>
                </>
            ),
            link: "http://www.renfe.com/EN/viajeros/index.html",
        },
        {
            Type: () => <>Bus</>,
            Title: () => <>Tortosa/L'Ampolla</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Hife is a bus company with headquarters in Tortosa.
                        There are buses from the airport to Tortosa and
                        L'Ampolla.
                    </p>
                </>
            ),
            link: "http://hife.es/en-GB",
        },
        {
            Type: () => <>Lodging for Wedding</>,
            Title: () => <>Tortosa/L' Ampolla</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        We recommend to stay either in Tortosa (Lledó's
                        hometown) or L'Ampolla (if you want to stay by the
                        beach). The Welcome Pica-pica will be in L'Ampolla, and
                        there will be buses from both Tortosa and L'Ampolla to
                        Les Moles on the day of the wedding. In L'Ampolla, Les
                        Oliveres and Hotel Cap Roig are good options; however,
                        you will need car transportation (5 min drive) to the
                        Welcome Pica-pica. The Parador, in Tortosa, is located
                        in the spectacular Zuda Castle, overlooking the city
                        from high above. In Spain, booking.com is usually better
                        than airbnb.com.
                    </p>
                </>
            ),
            link:
                "https://www.booking.com/index.ca.html?label=gen173nr-1BCAEoggI46AdIM1gEaLQCiAEBmAEEuAEHyAEN2AEB6AEBiAIBqAIDuAKd2ffxBcACAQ;sid=9a89e727464401b3616fc4b7b66218c9;keep_landing=1&sb_price_type=total&",
        },
    ]
}
