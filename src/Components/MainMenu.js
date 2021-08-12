import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Menu from './Menu'

const MainMenu = () => {
    return (
        <Container>
            <Banner />
            <Menu/>
        </Container>
    )
}

const Container = styled.div`

`

export default MainMenu
