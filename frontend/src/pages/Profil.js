import Nav from "../components/Nav"
import styled from "styled-components"
import * as React from 'react';

const ProfilContent = styled("main")`
    padding-top:80px;
    margin: 0 auto;
    min-height: fit-content;
    width:80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`



export default function Chat(){
    return(
        <>
            <Nav/>
            <ProfilContent>
                Profil
            </ProfilContent>
        </>

        
    )
}