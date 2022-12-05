import React from 'react'
import styled from "styled-components"
import Friends from './Friends'

export default function Sidebar() {
    const Sidebar = styled("aside")`
        position: relative;
        flex: 1;
        background-color: #4a4775;
        height: 100%;
        border-radius: 8px 0 0 8px;
        overflow: auto;
        ::-webkit-scrollbar{
            display: none;
        }
        @media (max-width: 500px) {
            border-radius: 0;
    }
    `
    const AsideNav = styled("div")`
        position: sticky;
        z-index: 2;
        height: 50px;
        padding: 10px;
        top: 0;
        width: 100%;
        height: max-content;
        background-color: #3e3c61;
        padding: 15px;
        text-align: center;
        color: #ddddf7;
        overflow: hidden;

    `

  return (
    <Sidebar>
        <AsideNav>
            Zoznam Priatelov
        </AsideNav>
        <Friends menoPriatela="Trhac Johny"></Friends>
        <Friends menoPriatela="Johny Trhac"></Friends>
        <Friends menoPriatela="Janko Ferko"></Friends>
        <Friends menoPriatela="Ferko Mrkvicka"></Friends>
        <Friends menoPriatela="Janko Mrkvicka"></Friends>
        <Friends menoPriatela="Trhac Johny"></Friends>
        <Friends menoPriatela="Trhac Johny"></Friends>
        <Friends menoPriatela="Johny Trhac"></Friends>
        <Friends menoPriatela="Janko Ferko"></Friends>
        <Friends menoPriatela="Ferko Mrkvicka"></Friends>
        <Friends menoPriatela="Janko Mrkvicka"></Friends>
        <Friends menoPriatela="Trhac Johny"></Friends>
        <Friends menoPriatela="Johny Trhac"></Friends>
        <Friends menoPriatela="Janko Ferko"></Friends>
        <Friends menoPriatela="Ferko Mrkvicka"></Friends>
        <Friends menoPriatela="Janko Mrkvicka"></Friends>
        <Friends menoPriatela="Trhac Johny"></Friends>
    </Sidebar>
  )
}
