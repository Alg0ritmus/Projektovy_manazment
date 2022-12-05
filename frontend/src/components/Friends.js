import React from 'react'
import Avatar from '@mui/material/Avatar';
import styled from "styled-components"

export default function Friends(props) {

    const FriendBlock = styled("div")`
        display: flex;
        align-items: center;
        gap:10px;
        width: 100%;
        height: max-content;
        color: #ddddf7;
        padding: 8px;
        cursor: pointer;

        :hover{
            background-color: #2f2d52;
        }
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
  return (
    <FriendBlock>
        <Avatar style={{width:"33px", height:"33px"}} {...stringAvatar(props.menoPriatela)} />
        <p>{props.menoPriatela}</p>
    </FriendBlock>
  )
}
