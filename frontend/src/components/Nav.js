import * as React from 'react';
import styled from "styled-components"

const Navbar = styled("nav")`
    width:100vw;
    background-color:#898b8c;
    height:60px;
    top:0;
    left:0;
    align-items: center;
    position: fixed;
    display:flex;
    justify-content:space-between;
`
const Box = styled("div")`
    display:flex;
    margin:0px 15px;
`

const NavLogo = styled("h2")`
    color:#166fe5;
    text-decoration:none;
`

const NavLink = styled("a")`

`

export default function Nav(){
   
    return(
        <Navbar style={{zIndex: 5 }}>
            <Box>
                <a className='emptyLink' href="/main">
                    <NavLogo>Tukbook</NavLogo>
                </a> 
            </Box>
            <Box>
                <a className='navLink' href="/profil">Profil</a>
                <a className='navLink' href="/chat">Chat</a>
                <a className='navLink' href="/">Odhlásiť</a>
                {/* <Box>
                    Odhlasenie/Nastavenia
                </Box>
                <Box>
                    Chat
                </Box>
                <Box>
                    
                </Box> */}
            </Box>
            
        </Navbar>
    )
}