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
    padding: 85px;
    background-color: #fcf9f4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px dashed ${({ theme }) => theme.COLORS.ORANGE_100};
    border-radius: 20px;
    box-shadow: 9px 56px 80px 0px rgba(0,0,0,0.1);

    text-align: center;

    > h1 {
        font-size: 28px;
        font-weight: 600;

        color: ${({ theme }) => theme.COLORS.ORANGE_100};
    }

    > h2 {
        font-size: 22px;
        margin: 48px 0;

    }

    > p {
        font-size: 8px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 40px 20px;

    h1 {
        font-size: 22px;
    }

    > h2 {
        font-size: 20px;
    }
}

`;

export const Text = styled(Link)`
    color: ${({ theme }) => theme.COLORS.ORANGE_100}
    
`;