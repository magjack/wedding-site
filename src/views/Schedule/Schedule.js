import React from "react"
import Container from "react-bootstrap/Container"

import { schedule, title } from "content/Schedule"
import { Header } from "components/Header"
import { Item } from "components/Item"
import headerImgDay from "photos/Chatelherault-Country-Park.jpg"
import headerImgNight from "photos/piping_centre_night.jpg"

function Schedule({ time }) {

    console.log(title,time)
    const { Heading, SubHeading } = title[time]
    const scheduleItems = schedule[time]

    return (
        <>
            <Header
                imageUrl={time === 'DAY' ? headerImgDay : headerImgNight}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container fluid>
                {scheduleItems.map(
                    (
                        {
                            Title,
                            Date,
                            Time,
                            Location,
                            locationLink,
                            Address,
                            Details,
                            mapLink,
                        },
                        idx
                    ) => (
                        <Item
                            key={idx}
                            LeftMainTitle={Title}
                            LeftFirstSubTitle={Date}
                            LeftSecondSubTitle={Time}
                            RightMainTitle={() => (
                                <a
                                    href={locationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Location />
                                </a>
                            )}
                            RightFirstContact={() => (
                                <a
                                    href={mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Address />
                                </a>
                            )}
                            RightDetails={Details}
                        />
                    )
                )}
            </Container>
        </>
    )
}

export default Schedule
