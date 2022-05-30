import styled from "styled-components";

const Container = styled.div`
  height: 32px;
  background-color: #444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 550;
`;

const News = () => {
  return (
    <Container>
      Super Promocja! Darmowa dostawa przy zamówieniu za minimum 40 PLN
    </Container>
  );
};

export default News;
