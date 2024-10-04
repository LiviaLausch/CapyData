import styled from "styled-components";

export const Container  = styled.button`
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.YELLOW_100};
    border-radius: 8px;
    border: none;
    padding: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
    width: 200px;
    margin: 20px;
`;
