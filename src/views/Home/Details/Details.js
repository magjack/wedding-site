import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { selectLanguage } from "utilities/cookies"
import { details } from "content/Home"

import styles from "./Details.module.scss"

function Details() {
    const [cookies] = useCookies(["language"])

    const { Title, Date, Location, hashtag, locationLink } = details[
        selectLanguage(cookies)
    ]
    return (
        <section>
            <Container>
                <Row>
                    <Col className={styles.details}>
                        <h1 className={styles.announcement}>
                            <Title />
                        </h1>
                        <h1 className={styles.date}>
                            <Date />
                        </h1>    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Details
