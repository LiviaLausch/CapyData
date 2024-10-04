import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;

    > input {
        width: 100%;
        margin: 14px 0;
        background: transparent;
        border: 1px solid ${({ theme}) => theme.COLORS.GREEN};
        color: ${({ theme}) => theme.COLORS.GREEN};
        border-radius: 8px;
        padding: 10px;

        &::placeholder {
            color: ${({ theme}) => theme.COLORS.GREEN_100};
            font-weight: 600;

        }
}

`;