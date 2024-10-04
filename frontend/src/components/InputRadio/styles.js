import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    h3 {
        display: block;
        font-weight: 400;
        font-size: 16px;
    }
    
    .input-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed;
        border-radius: 8px;
        width: 100%;
        gap: 10px;
        margin-top: 4px;
        margin-bottom: 16px;

        label {
            padding: 12px;
            display: flex;
            gap: 4px;
        }
    }
        
`;