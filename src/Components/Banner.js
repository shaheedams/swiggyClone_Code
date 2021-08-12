import React from 'react'
import styled from 'styled-components'
import profile from '../Images/profileImage.jfif'
import StarRateIcon from '@material-ui/icons/StarRate';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EcoIcon from '@material-ui/icons/Eco';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const Banner = () => {
    return (
        <Container>
            <Wrap>
                <Image>
                    <img src={ profile} width="250px"/>
                </Image>
                <HotelDetails>
                    <h1>The Belgian Waffle Co.</h1>
                    <p>Desserts, Beverages</p>
                    <p>KIlpauk, Kilpauk</p>
                    <Rateing className="top">
                        <Row style={{paddingLeft:"0"}}>
                            <h4><StarRateIcon style={{ paddingTop: "8px"}}/>4.3</h4>
                            <p>100+ Ratings</p>
                        </Row>
                        <Row>
                            <h4 style={{ paddingTop: "8px" }}>-- mins</h4>
                            <p>Delivery Time</p>
                        </Row>
                        <Row style={{border:"none"}}>
                            <h4 style={{ paddingTop: "8px" }}>₹ 200</h4>
                            <p>Cost for two</p>
                        </Row>
                    </Rateing>
                    <DownMenu>
                        <Search>
                            <SearchIcon style={{color:"#2B2B2B", margin: "5px",paddingTop:"5px" }}/><input type="text" placeholder="Search of dishes..." />
                        </Search>
                        <Type>
                            <p ><EcoIcon style={{color:"green",paddingTop:"10px"}}/>Pure Veg</p>
                        </Type>
                        <Favourite>
                            <p><FavoriteBorderIcon style={{paddingTop:"10px"}}/>Favourite</p>
                        </Favourite>
                    </DownMenu>
                </HotelDetails>
                <Offer>
                    <h3 className="offerName">OFFER</h3>
                    <div className="offer">
                        <LocalOfferIcon style={{marginRight:"10px"}}/><h5 style={{marginBottom:"15px"}}>20% off up to ₹50 | Use code TRYNEW</h5>
                    </div>
                    <div className="offer">
                        <LocalOfferIcon style={{marginRight:"10px"}}/><h5>15% off up to ₹100 | Use code 100SBI</h5>
                    </div>
                    
                </Offer>
            </Wrap>
            </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:250px;
    position:sticky;
    top:0;
    background:#1A1A2E;
    display:flex;
    align-items:center;
    color:white;
`

const Wrap = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-left:150px;
    margin-right:150px;
    
`
const Image = styled.div`
    
`

const HotelDetails = styled.div`
    margin-top:60px;
    p{
        color:gray;
        padding-bottom:15px;
        font-size:15px;
    }
    h1{
        padding-bottom:15px;
    }

`
const Rateing = styled.div`
    display:flex;
    p{
        font-size:10px;
        font-weight:900;
    }

`
const Row = styled.div`
    margin:0;
    padding:0;
    padding-left:25px;
    padding-right:25px;
    border-right:1px solid white;
`
const Search = styled.div`
    display:flex;
    background:white;
    padding:5px;
    width:230px;
    margin-right:25px;
    input{
        border:none;
        outline: none;
        font-weight:700;
        
    }
`
const DownMenu = styled.div`
    display:flex;
    align-items:center;
    margin-top:20px;    
    p{
        color:#2B2B2B;
        font-weight:700;
    }
`

const Type = styled.div`
    display:flex;
    align-items:center;
    background:white;
    padding-right:15px;
    padding-left:5px;
    margin-right:25px;
    
`
const Favourite = styled.div`
    background:white;
    padding:0 20px;
    margin-right:25px;
    p:hover{
        color:orange;
    }
`

const Offer = styled.div`
    border:1px solid white;
    padding:30px;
    width:330px;
    .offerName{
        position:absolute;
        bottom:24vh;
        background:#1A1A2E;
        padding:5px;
        padding-left:20px;
        left:67vw;
    }
    .offer{
        display:flex;
    }
`



export default Banner
