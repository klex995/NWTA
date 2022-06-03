import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import Navbar from "../components/Navbar";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/darmowe-zdjecie/dopasuj-blond-kobieta-z-idealnym-usmiechem-w-stylowej-odziezy-sportowej-patrzac-na-kamery-i-trzymajac-butelke-wody-na-bialej-scianie-zademonstruj-miesnie_273443-4534.jpg?w=1800&t=st=1653847066~exp=1653847666~hmac=39ea620a5069aced738b3865cd302878d668d3e9920afea28f439cec306ac390")
      center;
      background-size: cover;
      overflow: hidden;
`;


const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  margin-top: 10%;
  margin-left: 50%;
  transform: translate(-50%)
  `

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #444;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };


  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <Title>ZALOGUJ SIĘ</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick = {handleClick} disabled={isFetching}>ZALOGUJ</Button>
          {error && console.log(error, isFetching)}
          <Link>ZAPOMNIAŁEŚ HASŁO?</Link>
          <Link>STWÓRZ NOWE KONTO</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
