import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme}) => theme.COLORS.WHITE};
    max-width: 900px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 80px auto;
    padding: 80px 60px;
    border: 4px solid ${({ theme }) => theme.COLORS.ORANGE_100};
    border-radius: 20px;

    svg {
        height: 24px;
        width: 24px;
        display: flex;
        justify-content: flex-start;
    }

    .input-wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 10px;
        
        > p {
            font-size: 18px;
            font-weight: 400;
        }
    }

`
export const Form = styled.form`
    padding: 16px;

    h1 {
        color: ${({ theme }) => theme.COLORS.ORANGE_100};
        text-align: center;
        font-size: 34px;
        padding-bottom: 44px;
    }

    > fieldset {
        padding: 20px;
        border-radius: 8px;

        > legend {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 16px;
        }

        .button-save {
            display: flex;
            width: 100%;
            justify-content: end;
        }
    }
`;
