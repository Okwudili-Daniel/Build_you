import styled from 'styled-components';
import {AiOutlineMenu} from "react-icons/ai"
import img from "../assets/logo.png"

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
            <LogoArea>
                <Icon/>
                <Logo src={img}/>
            </LogoArea>

            <SearchArea>
                <Input
                placeholder="Search"
                type="text"
                />
            </SearchArea>

            <CreateArea>Create</CreateArea>
        </Main>
      </Container>
    </div>
  )
}

export default Header;
const Input = styled.input`
    flex: 1;
    height: 100%;
    border: 0;
    outline: none;
    padding-left: 10px;
    font-family: Poppins;
`
const CreateArea = styled.div``
const SearchArea = styled.div`
    width: 50%;
    height: 40px;
    border-radius: 50px;
    border: 1px solid silver;
    display: flex;
    align-items: center;
    overflow: hidden;
`
const Logo = styled.img`
    height: 35px;
`
const Icon = styled(AiOutlineMenu)`
    padding: 10px;
    border-radius: 50%;
    font-size: 20px;
    margin-right: 10px;
    transition: all 360ms;;

    &:hover{
        cursor: pointer;
        background-color: #e9e9e9;
    }
`
const LogoArea = styled.div`
    display: flex;
    align-items: center;
`
const Main = styled.div`
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`
const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
