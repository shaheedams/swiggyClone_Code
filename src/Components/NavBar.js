import React,{useState} from 'react'
import styled from 'styled-components'
import icon from '../Images/swiggyIcon.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';

const NavBar = () => {
    const [hover, setHover] = useState(false);
    return (
        <Container>
            <Wrap>
                <LeftNavLink>
                    <Icon>
                        <img src={icon} alt="icon" width="60px"></img>
                    </Icon>
                    <Location>
                        <div className="location">
                            <a href="#" ><p style={{fontWeight:"700" ,fontSize:"15px",color:"#2B2B2B"}}>Set location</p></a>
                            <p>Click to Choose Location</p>
                            <DownArrow className="downArrow"/>
                        </div>
                    </Location>
                </LeftNavLink>
                <RightNavLink>
                    <div className="link1">
                        <SportsSoccerIcon/><h4>Help</h4>
                    </div>
                    <div className="link2" onClick={() => {
                        setHover(true);
                    }}>
                        <PermIdentityIcon/><h4>Sign In</h4>
                    </div>
                    {hover&&<div className="signIn">
                        <CloseIcon style={{ cursor: "pointer" }} onClick={() => {
                            setHover(false);
                        }}/>
                        <div className="head">
                            <div className="left">
                                <h2 style={{ marginBottom:"8px"}}>Login</h2>
                                <a style={{color:"orange"}}>or create an account</a>
                            </div>
                            <div className="right">
                                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" width="100px"/>
                            </div>
                        </div>
                        <div className="login">
                            <input type="text" placeholder="Phone Number" style={{width:"370px",padding:"25px",marginBottom:"10px"}}/>
                            <button style={{width:"370px",padding:"20px",marginBottom:"10px",background:"orange",color:"white",fontWeight:"bolder"}}>LOGIN</button>
                        </div>
                    </div>}
                    
                    <div className="link3">
                        <div className="link" > 
                            <ShoppingCartIcon /><h4>Cart</h4>
                        </div>
                        <div className="cartHover">
                            <h1 style={{marginBottom:"10px"}}>Cart Empty</h1>
                            <p>Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
                        </div>
                        
                    </div>   
                </RightNavLink>
            </Wrap>
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    height:80px;
    display:flex;
    align-items:center;
    padding-left:140px;
    padding-right:140px;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.19);
    
`
const Wrap = styled.div`
    display:flex;
    
`
const LeftNavLink = styled.div`
    display:flex;
    align-items:center;
`
const Icon = styled.div`
    margin-right:30px;
    cursor:pointer;
    
`
const Location = styled.div`
    display:flex;
    cursor:pointer;
    align-items:center;
    a{
        color:black;
        text-decoration:none;
        margin-right:10px;
        font-weight:20;
        border-bottom:2px solid black;
        
    }
    p{
        font-size:15px;
        color:gray;
    }
    .location{
        display:flex;
        align-items:center;
    }
    .location:hover{
        color:orange;
    }
`
const DownArrow = styled(ExpandMoreIcon)`
    color:orange;
    cursor:pointer;
`

const RightNavLink = styled.div`
    display:flex;
    align-items:center;
    margin-left:33vw;
    h4{
       padding-left:10px; 
    }
    .link1,.link2,.link3{
        display:flex;
        align-items:center;
        padding-left:45px;
        color:gray;
        cursor:pointer;
    }
    .link1:hover{
        color:orange;
    }
    .link2:hover{
        color:orange;
    }
    .link:hover{
        color:orange;
    }
    .link{
        display:flex;
        align-items:center;
    }
    .cartHover{
        position:fixed;
        display:none;
        width:22vw;
        height:25vh;
        padding:40px;
        top:80px;
        right:120px;
        background:white;
        z-index:10;
        border-top:1px solid orange;
        box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.19);
    }
    .cartHover:after{
      position:absolute;
      content:'';
      height:20px;
      width:20px;
      background:#fff;
      left:50%;
      margin-left:100px;
      top:-11px;
      border-top:1px solid orange;
      border-left:1px solid orange;
     -webkit-transform: rotate(45deg);  Saf3.1+     
      -moz-transform: rotate(45deg);  FF3.5/3.6
      -ms-transform: rotate(45deg);  IE 9+
      -o-transform: rotate(45deg);  Opera 10.5
      transform: rotate(45deg);  Newer browsers (incl IE9) 
    }
    .link:hover + .cartHover {
        display: flex;
        flex-direction:column;
    }
    .signIn{
        position:fixed;
        top:0;
        right:0;
        width:38vw;
        height:100vh;
        background:white;
        padding:30px;
        z-index:10;
    }
    .head{
        display:flex;
        margin-bottom:20px;
    }
    .left{
        margin-top:20px;
        margin-right:120px;
    }
    .login{
        display:flex;
        flex-direction:column;
    }
`

export default NavBar
