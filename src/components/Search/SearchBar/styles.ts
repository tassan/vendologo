import styled from "styled-components";

export const SearchBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: var(--white);
    background-color: var(--yellow-500);
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  
    &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    }
  
    @media (max-width: 7680px) {
        width: 100%;
        height: 100%;
    }
  
    @media (max-width: 3840px) {
        width: 100%;
        height: 100%;
    }
  
    @media (max-width: 2560px) {
        width: 100%;
        height: 100%;
    }
  
    @media (max-width: 1920px) {
        width: 100%;
        height: 100%;
    }
  
    @media (max-width: 1440px) {
        width: 100%;
        height: 100%;
    }
  
    @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
    }
  
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
  
    @media (max-width: 480px) {
        width: 100%;
        height: 100%;
    }
  
    @media (max-width: 320px) {
        width: 100%;
        height: 100%;
    }
  
    @media (max-width: 280px) {
        width: 100%;
        height: 100%;
    }
`;

export const SearchBarTitle = styled.h2`
    font-family: "Roboto Light", sans-serif;
    font-size: 2.5rem;
    font-weight: bolder;
    margin-bottom: 20px;
`;

export const SearchBarForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const SearchBarLabel = styled.label`
    font-family: "Roboto Light", sans-serif;
    font-size: 1.5rem;
    font-weight: bolder;
    margin-right: 10px;
    padding: 0 10px;
`;

export const SearchBarInput = styled.input`
  width: 40%;
  height: 40px;
  border: 1px solid var(--yellow-100);
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  background-color: var(--white);
  color: var(--black);

  &:focus {
    border: 1px solid var(--gray-600);
    outline: none;
  }
`;

export const SearchBarCheckbox = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;

export const SearchBarCheckboxLabel = styled.label`
  font-family: "Roboto Light", sans-serif;
  font-size: 1.5rem;
  font-weight: bolder;
  margin-right: 10px;
  padding: 0 10px;
  color: var(--black);
`;

export const SearchBarSubmit = styled.button`
    width: 40%;
    height: 40px;
    border: 1px solid var(--yellow-100);
    border-radius: 5px;
    padding: 0 10px;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    background-color: var(--white);
    color: var(--black);
    cursor: pointer;
    
    &:hover {
        background-color: var(--yellow-100);
    }
    
    &:focus {
        border: 1px solid var(--gray-600);
        outline: none;
    }
`;