import {
  FitnessCenter,
  Search,
  ShoppingCartOutlined
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { logout } from "../redux/apiCalls"

const GlobalStyle = createGlobalStyle`
  *{
    color: black;
    text-decoration: none;
  }
`

const Container = styled.div`
  height: 60px;
  background: white;
`;

const Wrapper = styled.div`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Button = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  font-family: arial, sans-serif;
  cursor: pointer;
`

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 38px;
  font-weight: bold;
  color: black;
  text-decoration: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Menu = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
`;

const Navbar = () => { 
  const dispatch = useDispatch()
  const handleClick = (e) => {
    logout(dispatch);
  };

  const quantity = useSelector(state => state.cart.quantity);
  return (
    <Container>
      <GlobalStyle />
      <Wrapper>
        <Left>
          <Language>PL</Language>
          <SearchContainer>
            <Input placeholder="Szukaj" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/">
                SupleKoksa
            </Link>
            <FitnessCenter />
          </Logo>
        </Center>
        <Right>
          <Link to="/rejestracja">
            <Menu>Zarejestruj się</Menu>
          </Link>
          <Link to="/logowanie">
            <Menu>Zaloguj się</Menu>
          </Link>
          <Button onClick={() => {handleClick(dispatch)}}>
            <Menu>
              Wyloguj się
            </Menu>
          </Button>
          <Link to="/koszyk">
          <Menu>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Menu>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
