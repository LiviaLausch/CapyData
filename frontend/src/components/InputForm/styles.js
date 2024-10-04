import styled from "styled-components";

export const Container = styled.div`
        width: 100%;
        margin-bottom: 10px;
        > input {
        width: 100%;
        margin: 4px 0;
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