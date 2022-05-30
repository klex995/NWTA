import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 90vh;
  height: 90vh;
  //object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  display: flex;
  align-content: center;
  width: 50%;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #444;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #444;
  background-color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: lightgray;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <News />
      <Wrapper>
        <ImgContainer>
          <Image src="https://image.ceneostatic.pl/data/article_picture/eb/c5/8f9d-0e59-4768-b26d-784c91984f6a_large.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Kreatyna</Title>
          <Desc>Najlepszy supel, KOPIE MOCNO!!</Desc>
          <Price>50 PLN</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>DODAJ DO KOSZYKA</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
