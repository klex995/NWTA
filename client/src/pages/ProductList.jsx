import styled from "styled-components";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { categories } from "../data";

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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  function findCat(categories){
    return categories.cat === cat
  }

  return (
    <Container>
      <Navbar />
      <News />
      <Title>{categories.find(findCat).title}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sortuj produkty:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Najnowsze</Option>
            <Option value="asc">Cena rosnąco</Option>
            <Option value="desc">Cena malejąco</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
