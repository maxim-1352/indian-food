import styled from "styled-components/macro";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 50%;
  flex-${(direction) => direction};
  @media screen and (max-width: 700px) {
    width: 100%;
    
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(217, 220, 221, 0.8);
  width: 50%;
  font-family: Raleway, sans-serif;
  @media screen and (max-width: 3600px) {
    padding-bottom: 5px;
  }
`;

export const ImgWrap = styled.div`
  display: block;
  width: 50%;
  img {
    max-width: 100%;

    height: 100%;
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #304751;
  text-transform: uppercase;
`;
export const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #5d6f77;
  text-align: center;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #304751;
`;
const Dish = ({ data }) => {
  return (
    <Row>
      {data.map((d, i) => (
        <Item key={i} direction={d.direction}>
          <ImgWrap>
            <img src={d.img} alt={d.alt} />
          </ImgWrap>

          <Box>
            <Title>{d.name}</Title>
            <Desc>{d.desc}</Desc>
            <Price>${d.price}</Price>
          </Box>
        </Item>
      ))}
    </Row>
  );
};

export default Dish;
