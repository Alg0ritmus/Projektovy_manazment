import React from 'react'
import Message from './Message'
import styled from "styled-components"

export default function Messages() {
    const Messages = styled("div")`
        padding: 10px;
        height: calc(100% - 105px);
        padding-bottom: 265px;
    `
  return (
    <Messages>
        <Message message="dobry den" class="owner" menoPriatela="Janko Ferko"></Message>
        <Message message="dobry vecer" menoPriatela="Johny Trhac"></Message>
        <Message message="dobry vecer" class="owner" menoPriatela="Janko Ferko"></Message>
        <Message message="dobry vecer" menoPriatela="Johny Trhac"></Message>
        <Message message="dobry vecer" class="owner" menoPriatela="Janko Ferko"></Message>
        <Message message="muted" menoPriatela="Johny Trhac"></Message>

    </Messages>
  )
}
