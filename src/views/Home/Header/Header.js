import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"


import { selectLanguage } from "utilities/cookies"
import { headers } from "content/Home"

import styles from "./Header.module.scss"

function Header() {
    const [cookies] = useCookies(["language"])

    const HeaderContent = headers[selectLanguage(cookies)]

    return (
        <div className={styles.header}>
            <Container>
                <h1>
                    <HeaderContent />
                </h1>
            </Container>
        </div>
    )
}

export default Header
