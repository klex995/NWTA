import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import News from "../components/News";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductType = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <News />
      <Wrapper>
        <Title>TWÓJ KOSZYK</Title>
        <Top>
          <TopButton>KONTYNUUJ ZAKUPY</TopButton>
          <TopTexts>
            <TopText>Koszyk(2)</TopText>
            <TopText>Lista życzeń (0)</TopText>
          </TopTexts>
          <TopButton type="filled">DOKOŃCZ ZAMÓWIENIE</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://image.ceneostatic.pl/data/article_picture/eb/c5/8f9d-0e59-4768-b26d-784c91984f6a_large.png" />
                <Details>
                  <ProductName>
                    <b>Produkt:</b> Kreatyna
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 111
                  </ProductId>
                  <ProductType>
                    <b>Typ:</b> Monohydrant
                  </ProductType>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>30 PLN</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://strefamocy.pl/18103-thickbox_default/optimum-creatine-2500-200-kaps.jpg" />
                <Details>
                  <ProductName>
                    <b>Produkt:</b> Kreatyna
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 112
                  </ProductId>
                  <ProductType>
                    <b>Typ:</b> Monohydrant
                  </ProductType>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>40 PLN</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>PODSUMOWANIE ZAMÓWIENIA</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Rachunek</SummaryItemText>
              <SummaryItemPrice>70 PLN</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Dostawa</SummaryItemText>
              <SummaryItemPrice>10 PLN</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Zniżka na dostawe</SummaryItemText>
              <SummaryItemPrice>-10 PLN</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Do zapłaty</SummaryItemText>
              <SummaryItemPrice>70 PLN</SummaryItemPrice>
            </SummaryItem>
            <Button>DOKOŃCZ ZAMÓWIENIE</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
