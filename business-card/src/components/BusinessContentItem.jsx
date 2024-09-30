import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

const ContainerType = styled.div`
  color: black;
  font-size: 12px;

  margin-right: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerText = styled.div`
  color: #404040;
  font-size: 12px;
`;
function BusinessContentItem({ type, text }) {
  return (
    <Container>
      {type && <ContainerType>{type} : </ContainerType>}
      <ContainerText>{text}</ContainerText>
    </Container>
  );
}

export default BusinessContentItem;
