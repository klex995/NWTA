import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import News from "../components/News";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { addProduct, removeProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux"; 


const KEY = process.env.REACT_APP_STRIPE;

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
  font-weight: 700;
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
  cursor: pointer;
`;

const Cart = () => {
  
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const quantity = 1;
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  }
  
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  const handleAdd = (product) => {
    dispatch(
      addProduct({...product, quantity }));
  };

  return (
    <Container>
      <Navbar />
      <News />
      <Wrapper>
        <Title>TWÓJ KOSZYK</Title>
        <Top>
          <Link to="/">
            <TopButton>KONTYNUUJ ZAKUPY</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
           {cart.products.map((product) => (
           <Product>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Produkt:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductType>
                    <b>Typ:</b> {product.type}
                  </ProductType>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add onClick={()=>{handleAdd(product)}} style={{cursor: "pointer"}} />
                  <ProductAmount> {product.quantity} </ProductAmount>
                </ProductAmountContainer>
                <ProductPrice>PLN {product.price * product.quantity} </ProductPrice>
              </PriceDetail>
            </Product>
            ))}
            <Hr />

          </Info>
          <Summary>
            <SummaryTitle>PODSUMOWANIE ZAMÓWIENIA</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Rachunek</SummaryItemText>
              <SummaryItemPrice>{cart.total} PLN</SummaryItemPrice>
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
              <SummaryItemPrice>{cart.total} PLN</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="SupleKoksa"
              image="https://fv9-5.failiem.lv/thumb_show.php?i=t5x2xub5y&view"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey='pk_test_51L5UxFFtDqSpPnjDbHJmyqFqAzDzVp33hqwRTzuJ7OqMyMTDyG1hC8PRNAlUcYjucHbtDgNXd4C6qjmSkioBaEli001pdvfuQT'
            >
              <Button>Zapłać teraz</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
