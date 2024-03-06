import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Type: () => <>Chatelherault - Train</>,
            Details: () => (
                <>
                    <p>
                        There is a train station outside Chatelherault called Chatelherault station. You can come straight from Glasgow Central low level. 
                        There is about a 0.5 mile walk from the station to the venue where we are getting married over country paths.
                    </p>
                </>
            ),
            link: "https://www.thetrainline.com/book/results?origin=urn%3Atrainline%3Ageneric%3Aloc%3AGLC9813gb&destination=urn%3Atrainline%3Ageneric%3Aloc%3ACTE9707gb&outwardDate=2024-02-22T20%3A15%3A00&outwardDateType=departAfter&journeySearchType=openReturn&passengers%5B%5D=1994-02-22&directSearch=false&selectedOutward=DhhUHwbi%2Bk0%3D%3ATHpm8tu4XVI%3D",
        },
        {
            Type: () => <>Bus</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>The bus system we have no idea of and there is no direct bus from Glasgow City center but google shows it possible with a few changes.
                        The bus stop is located next to the train station and has the same walk involved.
                    </p>
                </>
            ),
            link:
                "https://www.google.com/maps/dir/Glasgow+Central,+Gordon+Street,+Glasgow/Chatelherault+Country+Park,+Carlisle+Rd,+Ferniegair,+Hamilton+ML3+7UE/@55.8109579,-4.2145783,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4888469dd79d903b:0xef65bf326caa4a56!2m2!1d-4.2581088!2d55.8591118!1m5!1m1!1s0x488814c3c70adc5f:0x3225ed6b51275432!2m2!1d-4.015!2d55.7622222!3e3?entry=ttu",
        },
        {
            Type: () => <>Taxi</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        It is a 22 minute and 16.5 mile drive from Glasgow Central to Chatelherault. At not peak times this will cost about
                        £20 pounds per taxi when I checked on the GlasGo Cab app. 
                    </p>
                </>
            ),
            link: "https://glasgocabs.co.uk/",
        },
        
        {
            Type: () => <>Lodging for Wedding</>,
            Title: () => <>Glasgow City Center</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        The evening reception will be in the Piping center located in the north of the city center next to the theatre royal.
                        There is a number of hotels in a walkable distance from here.     
                    </p>
                </>
            ),
            link:
                "https://www.booking.com/searchresults.en-gb.html?ss=Glasgow+City+Centre%2C+Glasgow%2C+Scotland%2C+United+Kingdom&map=1&label=gen173nr-1BCAEoggI46AdIM1gEaFCIAQGYAQm4ARfIAQzYAQHoAQGIAgGoAgO4AvXX3q4GwAIB0gIkYjQzNzE3MjYtZmZhYS00NWJmLThhZWQtODBlMTFhMjdjZDIz2AIF4AIB&sid=aebb63850bd76f4ae13c3c4ee5890134&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=1101&dest_type=district&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=70ea8eba5e5002ad&ac_meta=GhA3MGVhOGViYTVlNTAwMmFkIAAoATICZW46DEdsYXNnb3cgQ2l0eUAASgBQAA%3D%3D&checkin=2024-06-07&checkout=2024-06-08&group_adults=2&no_rooms=1&group_children=0#map_opened",
        },
    ]
}
