import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 20px;

  color: #0e0e0e;

  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

function Header({ children }) {
  return <HeaderContainer>{children}</HeaderContainer>;
}

export default Header;
