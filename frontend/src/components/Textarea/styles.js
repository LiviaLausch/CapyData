import styled from "styled-components";

export const Container = styled.textarea`
    background-color: ${({ theme }) => theme.COLORS.YELLOW_100};
    color: ${({ theme }) => theme.COLORS.GREEN};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.GREEN};;

    padding: 16px;
    margin-bottom: 8px;
    height: 100px;
    width: 100%;
    resize: none;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GREEN_100};

    }
`;