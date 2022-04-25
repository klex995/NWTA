import { EmailOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 30vh;
  background-color: #f2e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 75px;
  margin-bottom: 15px;
`;

const Desc = styled.div`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 15px;
`;

const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 0.5px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 10px;
`;

const Button = styled.button`
  flex: 1;
  border: 0.5px solid black;
  background-color: #eec7b6;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>
        Otrzymuj wiadomości o najświeższych promocjach i nowych produktach.
      </Desc>
      <InputContainer>
        <Input placeholder="Twój adres email" />
        <Button>
          <EmailOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
