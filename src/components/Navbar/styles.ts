import styled from "styled-components";
import vendologo from "@/assets/vendologo.svg";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background-color: var(--white);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const LogoTypography = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--black);
  font-family: "Roboto", sans-serif;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-left: 1rem;
  }
`;

export const MenuItem = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--black);
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--yellow-700);
  }
`;