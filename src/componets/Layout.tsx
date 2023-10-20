import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Sider from './Sider'
import styled from 'styled-components'

const Layout = () => {
  return (
    <Container>
      <Header/>
    <Main>
      <Sider/>
      
      <Holder>
        <Div>
        <Outlet/>
        </Div>
      </Holder>
    </Main>
    </Container>
  )
}

export default Layout;
const Div = styled.div`
   width: calc(100% - 150px);
`
const Holder = styled.div`
     width: calc(100%);
    display: flex;
    justify-content: end;
`
const Main = styled.div`
    display: flex;
    width: 100%;
`
const Container = styled.div``
