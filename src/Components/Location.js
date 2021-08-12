import React from 'react'
import styled from 'styled-components'

const Location = () => {
    return (
        <Container>
            <Wrap>
                <a href="#"> Home</a>  /
                <a href="#">  Chennai</a>  /
                <a href="#">  Kilpack</a>  /
                <a href="#" style={{color:"black"}}>  The Belgian Waffle Co.</a>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:30px;
    display:flex;
    align-items:center;
    font-size:10px;
    
`
const Wrap = styled.div`
    margin-left:155px;
    a{
        text-decoration:none;
        color:gray;
        letter-spacing:1px;  
    }
`

export default Location
