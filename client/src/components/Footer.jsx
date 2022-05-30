import {
  ContactMail,
  Facebook,
  FitnessCenter,
  Instagram,
  PhoneIphone,
  PinDrop,
  Twitter
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Logo = styled.div`
  font-size: 38px;
  font-weight: bold;
`;

const Desc = styled.p`
  margin: 15px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;

const Center = styled.div`
  flex: 1;
  padding: 15px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
`;

const Right = styled.div`
  flex: 1;
  padding: 15px;
`;

const ContactItem = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          SupleKoksa
          <FitnessCenter />
        </Logo>
        <Desc>
          Zapewniamy najczystsze, dające największego kopa suplementy na rynku.
          Skorzystaj z naszej oferty, a przyrosty przyjdą same! Tylko najlepsze
          SupleKoksa!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Przydatne linki</Title>
        <List>
          <ListItem>Strona główna</ListItem>
          <ListItem>Koszyk</ListItem>
          <ListItem>Proszki</ListItem>
          <ListItem>Kapsułki</ListItem>
          <ListItem>Napoje</ListItem>
          <ListItem>Śledzenie zamówienia</ListItem>
          <ListItem>Lista życzeń</ListItem>
          <ListItem>Zasady</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Kontakt</Title>
        <ContactItem>
          <PinDrop style={{ marginRight: "10px" }} /> Największych Przyrostów
          42, 31-100 Kraków
        </ContactItem>
        <ContactItem>
          <PhoneIphone style={{ marginRight: "10px" }} /> +0 12321232123
        </ContactItem>
        <ContactItem>
          <ContactMail style={{ marginRight: "10px" }} /> kontakt@suplekoksa.pl
        </ContactItem>
        <Payment src="https://www.savinga.com/img/paypal.png" />
      </Right>
    </Container>
  );
};

export default Footer;
