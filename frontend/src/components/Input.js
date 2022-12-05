import React from 'react'
import styled from "styled-components"
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function Input() {
    const InputBox = styled("div")`
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background-color: whitesmoke;
        align-items: center;
        z-index: 15;
        position: sticky;
        bottom: 0;
    `

    const SendButton = styled("button")`
        border: none;
        padding: 10px 15px;
        color: white;
        background-color: #acbcd7;
        cursor: pointer;
        border-radius: 8px;
    `
  return (
    <InputBox>
        <TextareaAutosize style={{overflowWrap: "break-word",padding:"5px", border:"none",width:"100%",resize:"none",backgroundColor:"whitesmoke",outline:"none",fontSize:"18px",display:"flex",alignItems:"center",color:"2f2d52"}} id="standard-basic" placeholder='Nieco napis...' variant="standard"  />
        <SendButton>Odoslať</SendButton>
    </InputBox>
  )
}
