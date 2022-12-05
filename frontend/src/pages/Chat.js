import Nav from "../components/Nav"
import styled from "styled-components"
import * as React from 'react';
import Sidebar from "../components/Sidebar";
import ChatSide from "../components/ChatSide";

const CenterDiv = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding-top: 60px;
`

const ChatContainer = styled("main")`
    margin: 0 auto;
    min-height: fit-content;
    width:80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    flex-direction: row;

    @media (max-width: 650px) {
        width: 90%;
    }
    @media (max-width: 500px) {
        width: 100%;
        height: 100%;
    }
`



export default function Chat(){
    return(
        <>
        <CenterDiv>
            <Nav/>
            <ChatContainer >
                <Sidebar>

                </Sidebar>
                <ChatSide>

                </ChatSide>
            </ChatContainer >
        </CenterDiv>
        </>

        
    )
}