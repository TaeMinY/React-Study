import styled, { css } from "styled-components";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import TodayWordEnableIcon from "../assets/icons/menu/today_word_enable.svg";
import TodayWordDisableIcon from "../assets/icons/menu/today_word_disable.svg";
import VocaEnableIcon from "../assets/icons/menu/voca_enable.svg";
import VocaDisableIcon from "../assets/icons/menu/voca_disable.svg";
import MoreEnableIcon from "../assets/icons/menu/more_enable.svg";
import MoreDisableIcon from "../assets/icons/menu/more_disable.svg";

const MenuLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BottomNavigation = styled.div`
  width: 100%;
  height: 61px;

  position: sticky;
  bottom: 0px;
  left: 0px;

  border-top: 1px solid #ededed;

  display: flex;
  background-color: white;
`;

const BottomNavigationItem = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  cursor: pointer;
`;

const BottomNavigationItemImg = styled.img`
  margin: 0 auto;
`;

const BottomNavigationItemText = styled.div`
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.12px;
  font-weight: 700;

  ${(props) => props.$customStyle}
`;

function MenuLayout() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const disableStyle = css`
    color: #cfcece;
  `;

  const enableStyle = css`
    color: #1e1e1e;
  `;

  return (
    <MenuLayoutContainer>
      <Outlet></Outlet>
      <BottomNavigation>
        <BottomNavigationItem
          onClick={() => {
            navigate("/");
          }}
        >
          <BottomNavigationItemImg
            src={pathname === "/" ? TodayWordEnableIcon : TodayWordDisableIcon}
          ></BottomNavigationItemImg>
          <BottomNavigationItemText
            $customStyle={pathname === "/" ? enableStyle : disableStyle}
          >
            오늘의 단어
          </BottomNavigationItemText>
        </BottomNavigationItem>
        <BottomNavigationItem
          onClick={() => {
            navigate("/voca");
          }}
        >
          <BottomNavigationItemImg
            src={pathname === "/voca" ? VocaEnableIcon : VocaDisableIcon}
          ></BottomNavigationItemImg>
          <BottomNavigationItemText
            $customStyle={pathname === "/voca" ? enableStyle : disableStyle}
          >
            단어장
          </BottomNavigationItemText>
        </BottomNavigationItem>
        <BottomNavigationItem
          onClick={() => {
            navigate("/more");
          }}
        >
          <BottomNavigationItemImg
            src={pathname === "/more" ? MoreEnableIcon : MoreDisableIcon}
          ></BottomNavigationItemImg>
          <BottomNavigationItemText
            $customStyle={pathname === "/more" ? enableStyle : disableStyle}
          >
            더보기
          </BottomNavigationItemText>
        </BottomNavigationItem>
      </BottomNavigation>
    </MenuLayoutContainer>
  );
}
export default MenuLayout;
