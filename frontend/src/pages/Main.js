import Nav from "../components/Nav"
import styled from "styled-components"
import * as React from 'react';
import Prispevok from "../components/Prispevok";
import NovyPrispevok from "../components/NovyPrispevok";

const MainContent = styled("main")`
    padding-top:80px;
    margin: 0 auto;
    min-height: fit-content;
    width:80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`



export default function Main(){
    return(
        <>
            <Nav/>
            <MainContent>
                <NovyPrispevok></NovyPrispevok>
                <Prispevok menoAutora="Ivan Gadus" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam id non maxime assumenda voluptates quis dolorem, aspernatur asperiores possimus? Quasi quidem quae ipsa nesciunt qui!"/>
                <Prispevok menoAutora="Kyko Spokovic" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos voluptatibus ratione. Cupiditate quisquam dicta necessitatibus, id vitae voluptate assumenda atque. Hic, non quo. Aliquid repudiandae asperiores nesciunt neque quidem." />
                <Prispevok menoAutora="Matus Grecko" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque iste architecto quidem dolore natus doloribus magni. Tenetur incidunt debitis nesciunt corrupti doloribus, excepturi distinctio. Rem accusantium ut, iure autem placeat laborum quisquam animi nulla, quod tempora delectus blanditiis dicta quibusdam inventore error sunt aspernatur. Dolor blanditiis voluptate doloremque obcaecati?" />
                <Prispevok menoAutora="Simona Spokovicova" text="id non maxime assumenda voluptates quis dolorem, aspernatur asperiores possimus? Quasi quidem quae ipsa nesciunt qui!" />
                <Prispevok menoAutora="Patrik Zajac" text="Kyko je vuuuuuuuuuuuuuuuuuuuuuuuuul" />
                <Prispevok menoAutora="Ado Prihoda" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero impedit doloribus ipsum odio, corporis delectus quia, sunt eum molestias unde, temporibus expedita qui magnam quam voluptatibus culpa consequatur dignissimos fugiat in sit! Ut qui, eligendi fuga animi laboriosam minima! Consequuntur quas rem sunt sapiente eligendi harum numquam, cumque itaque voluptatum deleniti totam ipsam corrupti similique impedit ipsum aliquid quam reiciendis officiis maiores? Accusantium, saepe magni quam iste ducimus alias vitae beatae magnam corrupti libero? Accusantium sint expedita praesentium sed possimus totam fugiat, laudantium et vel odio aliquam cupiditate odit tenetur quasi! Voluptate, voluptates illo perspiciatis minima sequi quisquam magnam qui consequatur optio rerum odio! Officia aspernatur rerum quam, asperiores aut repudiandae debitis mollitia nostrum minus impedit consectetur, maxime dolorem provident sit optio deserunt cupiditate earum nemo vitae sapiente odio. Iusto vero, adipisci quas error modi, hic dignissimos, culpa accusamus accusantium tempore sed asperiores fugit rem laborum minus totam cum ratione voluptates consectetur laboriosam soluta animi ut itaque! Error eligendi consequatur odit maiores iste vitae suscipit id quibusdam, voluptatibus exercitationem fugit quis maxime voluptates illum cupiditate hic mollitia nesciunt iusto soluta quos earum animi magni provident? Vel officia incidunt consequuntur distinctio ipsum placeat, ullam, nobis dolorum enim quo suscipit iste!" />
            </MainContent>
        </>

        
    )
}