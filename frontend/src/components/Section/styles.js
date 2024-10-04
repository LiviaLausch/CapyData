import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: grid;
    grid-template-areas:
    "A B C" ;
    margin-inline: auto;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;