import React from 'react'
import styled from "styled-components"
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { fontSize } from '@mui/system';


const PrispevokContainer = styled("div")`
    width: 100%;
    height: max-content;
    background-color: #ECF3FF;
    border-radius: 9px;
    max-width: 650px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    padding-bottom: 20px;
`

const PrispevokHeaderContainer = styled("div")`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
`

const PrispevokText = styled("div")`
    width: 100%;
    height: max-content;
`
const LikeBlock = styled("div")`
    width: 100%;
    height: max-content;
    padding: 5px 0;
    margin-top: 15px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LikeButton = styled("button")`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 10px;
    gap: 8px;
    border: none;
    background-color: inherit;
    cursor: pointer;
    border-radius: 8px;
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    :hover{
      background-color: #cccccc;
    }
`

const LikeCount = styled("div")`
    margin-right: 5px;
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 300;

`

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

export default function Prispevok(props) {
  return (
    <PrispevokContainer>
        <PrispevokHeaderContainer>
            <Avatar style={{marginRight:"20px"}} {...stringAvatar(props.menoAutora)} />
            <p style={{fontSize:"20px"}}>{props.menoAutora}</p>
        </PrispevokHeaderContainer>
        <PrispevokText>
            {props.text}
        </PrispevokText>
        <LikeBlock>
          <LikeButton>
            <ThumbUpIcon style={{margin:"2px", fontSize:"18px"}}></ThumbUpIcon>
            Páči sa mi to
          </LikeButton>
          <LikeCount>10</LikeCount>
        </LikeBlock> 
    </PrispevokContainer>
  )
}