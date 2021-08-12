import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StarRateIcon from '@material-ui/icons/StarRate';
import profile from '../Images/profileImage.jfif'
import Cart from '../Images/Cart_empty.png'
import {data} from '../data'

const Menu = () => {
    return (
        <Container >
            <Wrap >
                <SideMenu>
                    <a href="#" style={{marginTop:"50px"}}>Recommended</a>
                    <a href="#">All-Time Favorite Specials</a>
                    <a href="#">BWC Specials</a>
                    <a href="#">Waffles</a>
                    <a href="#">Waffle Cakes</a>
                    <a href="#">Beverages</a>
                </SideMenu>
                <Main >
                    <Title>
                        <h1>Recommended</h1>
                    </Title>
                    <Items>
                        <p style={{color:"gray"}}>6 ITEMS</p>
                    </Items>
                    {data.map(i => {
                        return (
                            <Details>
                                <Food>
                                    <Type>
                                        <FiberManualRecordIcon style={{color:"green"}}/>
                                        <StarRateIcon style={{color:"orange"}}/>
                                        <p style={{color:"orange",fontSize:"smaller"}}>BestSeller</p>
                                    </Type>
                                    <h3 style={{ marginBottom: "10px" }}>{ i.name}</h3>
                                    <p style={{ marginBottom: "10px" }}>₹ { i.price}</p>
                                    <p style={{ color: "gray", marginBottom: "30px" }}>{i.des}</p>
                                </Food>
                                <FoodImg style={{zIndex:"-1"}}>
                                    <img src={i.image} width="150px" height="100px"></img>
                                    <p>Unavaliable</p>
                                </FoodImg>
                        
                            </Details>
                                )
                            })}
                </Main>
                <Chart >
                    <h1 style={{ color: "gray",marginBottom:"20px" }}>Cart Empty</h1>
                    <img src={Cart} width="300px"></img>
                    <p style={{ color: "gray",marginTop:"10px" }}>Good food is always cooking!<br/> Go ahead, order some yummy<br/> items from the menu.</p>
                </Chart>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    // display:flex;
`
const Wrap = styled.div`
    display:flex;
`
const SideMenu = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    width:25vw;
    position:fixed;
    a{
        text-decoration:none;
        color:black;
        margin:5px 30px;
    }
    a:hover{
        color:orange;
    }
`
const Main = styled.div`
    width:45vw;
    display:flex;
    flex-direction:column;
    margin-left:25vw;
    padding-top:50px;
    padding-left:70px;
    
`
const Title = styled.div`

`
const Items = styled.div`
    
`
const Type = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`
const Details = styled.div`
    display:flex;
    margin-top:30px;
    border-bottom:1px solid gray;
`
const Food = styled.div`

`

const FoodImg = styled.div`
    margin-right:50px;
    img{
         border-radius: 10px;
    }
    p{
        position:relative;
        bottom:25px;
        padding:10px;
        color:gray;
        font-size:10px;
        background:white;
        width:100px;
        text-size:5px;
        left:25px;
        text-align:center;
    }
    
`

const Chart = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:40px;
    margin-left:20px;
    z-index:-1;
    position:fixed;
    right:100px;
    top:330px;
`

export default Menu
