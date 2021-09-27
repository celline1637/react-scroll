import styled from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  ${({ theme }) => theme.flexSet()};
  height: 80px;
  margin-top: -80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: black;
  ${({ theme }) => theme.tablet`
  transition : 0.8s all ease
  `};
`;

export const NavContainer = styled.div`
  ${({ theme }) => theme.flexSet("space-between")};
  width: 100%;
  max-width: 1100px;
  height: 80px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  justify-self: flex-start;
  align-self: center;
  margin-left: 24px;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  color: white;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  } ;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  height: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid green;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background-color: green;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: white;
    color: black;
  }
`;
