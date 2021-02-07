import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  background: #fff;
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 15px 15px 0 rgba(0,0,0,0.2)" : "transparent"};
  transition: all 0.3s ease-in-out;
  height: 80px;
  width: 100%;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  border-radius: 0 0 15px 15px;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.div`
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#1A4341")};
  transition: all 0.2s ease-in-out;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: ${({ scrollNav }) => (scrollNav ? "#000" : "#1A4341")};

    display: block;
    position: absolute;
    bottom: 25%;
    right: 5%;
    transition: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#1A4341")};
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 1.25em;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #fff;
    border-radius: 0 0 10px 10px;
  }

  &:hover {
    color: #2a6965;
  }
`;
