import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme}) => theme.COLORS.WHITE};
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 80px auto;
    padding: 60px;
    border: 4px solid ${({ theme }) => theme.COLORS.ORANGE_100};
    border-radius: 20px;

    > a, svg {
        height: 20px;
        width: 20px;
        color: ${({ theme }) => theme.COLORS.ORANGE_100};
    }

    h1 {
        text-align: center;
        margin: 50px auto;
    }

    > #edit {
        display: flex;
        justify-content: end;
        padding: 10px;
        gap: 16px;

        svg {
            height: 18px;
            width: 18px;
        }
    }

    > #perfil {
        border: 1px dashed orange;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 40px;

        > img {
            width: 250px;
            height: 250px;
        }

        > section {
            display: flex;
            flex-direction: column;
            gap: 4px;

            > span {
                font-size: 24px;
                font-weight: 800;
            }

            > p {
                font-size: 18px;
            }
        }

    }
`;
