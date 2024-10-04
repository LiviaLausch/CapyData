import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const Form = styled.form`
    padding: 60px 80px;
    min-width: 500px;
    background-color: ${({ theme}) => theme.COLORS.WHITE};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px dashed ${({ theme }) => theme.COLORS.ORANGE_100};
    border-radius: 18px;
    box-shadow: 9px 16px 80px -12px rgba(0,0,0,0.1);

    text-align: center;

    > h2{
        font-size: 24px;
        font-weight: 600;
        padding: 30px 2px;
        color: ${({ theme }) => theme.COLORS.ORANGE_100};
    }

    > p {
        font-size: 8px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        padding: 60px 20px;
        min-width: 300px;
    }

`;

export const Text = styled(Link)`
    color: ${({ theme }) => theme.COLORS.ORANGE_100}
    
`;