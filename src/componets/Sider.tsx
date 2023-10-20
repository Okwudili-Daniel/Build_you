import React from 'react'
import styled from 'styled-components';

const Sider = () => {
  return (
    <div>
      <Container>Sider</Container>
    </div>
  )
}

export default Sider;
const Container = styled.div`
    width: 150px;
    height: calc(100vh - 50px);
    position: fixed;
`
