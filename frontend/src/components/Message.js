import React from 'react'
import styled from "styled-components"
import Avatar from '@mui/material/Avatar';

export default function Message(props) {
    const MessageInfo = styled("div")`
        display: flex;
        flex-direction: ${props.class ? "row-reverse" : "row"};
        gap: 10px;
    `

    const MessageContent = styled("div")`
        width: max-content;
        height: max-content;
        background-color: whitesmoke;
        border-radius: ${props.class ? "8px 8px 0 8px" : "8px 8px 8px 0"};
        padding: 5px;
    `
    const MessageBlock = styled("div")`
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
        flex-direction: ${props.class ? "row-reverse" : "row"};
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
    <MessageBlock>
        <MessageInfo>
            <Avatar style={{width:"33px", height:"33px"}} {...stringAvatar(props.menoPriatela)} />
        </MessageInfo>
        <MessageContent>
            <p>{props.message}</p>
        </MessageContent>
    </MessageBlock>
  )
}
