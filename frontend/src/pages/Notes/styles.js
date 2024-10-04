import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    background-color: ${({ theme}) => theme.COLORS.WHITE};
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 80px auto;
    padding: 80px 60px;
    border: 4px solid ${({ theme }) => theme.COLORS.ORANGE_100};
    border-radius: 20px;

    
    > #top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > h1 {
            font-size: 22px;
        }
    }

    > #patients {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        padding: 60px 30px;
    }

`;