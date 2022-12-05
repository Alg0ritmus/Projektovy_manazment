import React from 'react'
import styled from "styled-components"
import Input from './Input'
import Messages from './Messages'

export default function ChatSide() {
    const ChatSide = styled("aside")`
    position: relative;
        flex: 2;
        height: 100%;
        background-color: #c4d5f3;
        overflow-y: auto;
        border-radius: 0px 8px 8px 0px;

        @media (max-width: 500px) {
            border-radius: 0;
        }
    `
        const ChatNav = styled("div")`
        width: 100%;
        height: max-content;
        background-color: #5d5b8d;
        height: 50px;
        padding: 10px;
        text-align: center;
        color: #a7aeb9;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 3;

    `
  return (
    <ChatSide>
        <ChatNav>
            Chatovacia miestnost
        </ChatNav>  
        <Messages />
        <Input></Input>
    </ChatSide>
  )
}
