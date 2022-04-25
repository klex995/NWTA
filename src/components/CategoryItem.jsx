import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 2px;
  height: 50vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  color: white;
  text-shadow: -1px -1px 0 #b12828, 0 -1px 0 #b12828, 1px -1px 0 #b12828,
    1px 0 0 #b12828, 1px 1px 0 #b12828, 0 1px 0 #b12828, -1px 1px 0 #b12828,
    -1px 0 0 #b12828;
  margin-bottom: 15px;
  font-size: 80px;
  font-weight: bold;
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: bold;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SPRAWDŹ</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
