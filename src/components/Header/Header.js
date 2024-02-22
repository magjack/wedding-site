import React from "react"

import Container from "react-bootstrap/Container"

import styles from "./Header.module.scss"

const Header = ({ imageUrl, Heading, SubHeading }) => (
    <>
        <div
            
            className={styles.heading}
            style={{
                backgroundImage: `url("${imageUrl}")`,
            }}
        >
            <Container>
                <h1>
                    <Heading />
                </h1>
            </Container>
        </div>
        <Container className={styles["sub-heading"]}>
            <h5 className="text-muted">
                <SubHeading />
            </h5>
        </Container>
    </>
)

export default Header
