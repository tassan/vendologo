import styled from "styled-components";

export const AdvertisementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--blue-100);
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
`;

export const AdvertisementImageContainer = styled.div`
    width: 100%;
    height: 100%;
`;