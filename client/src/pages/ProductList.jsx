import styled from "styled-components";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 15px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 15px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <News />
      <Title>Proszek</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtruj produkty:</FilterText>
          <Select>
            <Option disabled selected>
              Typ
            </Option>
            <Option>Monohydrant</Option>
            <Option>Jabłczan</Option>
            <Option>Cytrynian</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sortuj produkty:</FilterText>
          <Select>
            <Option selected>Najnowsze</Option>
            <Option>Cena rosnąco</Option>
            <Option>Cena malejąco</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
