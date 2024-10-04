import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 23px;
    line-height: 26px;
    
    > select {
        font-size: 16px;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.GREEN};
        border-radius: 10px;
        border: 1px solid ${({theme}) => theme.COLORS.GREEN};
        background: transparent;
        height: 50px;
        padding: 0 12px;

        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
`;