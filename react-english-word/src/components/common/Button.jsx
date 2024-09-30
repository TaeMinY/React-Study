import styled, { css } from "styled-components";

const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 8px;

  border: 1px solid #36afff;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.$customStyle}
  ${(props) => props.$buttonStyle}

  cursor: pointer;
`;
const ButtonText = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-bottom: 2px;
`;

const getButtonStyle = (type) => {
  if (type == "main") {
    return css`
      background-color: #36afff;
      color: #ffffff;
    `;
  } else if (type == "main-reversal") {
    return css`
      background-color: #ffffff;
      color: #36afff;
    `;
  } else {
    return css``;
  }
};
function Button({ children, onClick, style, type = "main" }) {
  return (
    <ButtonContainer
      $customStyle={style}
      onClick={onClick}
      $buttonStyle={getButtonStyle(type)}
    >
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
}
export default Button;
