import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    height: 42px;
    border: 1px dashed ${({ theme }) => theme.COLORS.GREEN};
    border-radius: 8px;
    align-items: center;
    margin: 4px;
    
    
    label {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        font-size: 14px;
        font-weight: 500;
        padding: 10px 10px;
    }
    
    input {
        margin: 4px;
        border: none;
        display: none;
    }
`;