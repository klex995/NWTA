import {
  FitnessCenter,
  Search,
  ShoppingCartOutlined
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
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
  const quantity = useSelector(state => state.cart.quantity);
  return (
    <Container>
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
            SupleKoksa
            <FitnessCenter />
          </Logo>
        </Center>
        <Right>
          <Menu>REJESTRACJA</Menu>
          <Menu>LOGOWANIE</Menu>
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
