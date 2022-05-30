import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/darmowe-zdjecie/dopasuj-blond-kobieta-z-idealnym-usmiechem-w-stylowej-odziezy-sportowej-patrzac-na-kamery-i-trzymajac-butelke-wody-na-bialej-scianie-zademonstruj-miesnie_273443-4534.jpg?w=1800&t=st=1653847066~exp=1653847666~hmac=39ea620a5069aced738b3865cd302878d668d3e9920afea28f439cec306ac390")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

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
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>ZALOGUJ SIĘ</Title>
        <Form>
          <Input placeholder="login" />
          <Input placeholder="hasło" />
          <Button>ZALOGUJ</Button>
          <Link>ZAPOMNIAŁEŚ HASŁO?</Link>
          <Link>STWÓRZ NOWE KONTO</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
