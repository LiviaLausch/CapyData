import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    background-color: ${({ theme}) => theme.COLORS.WHITE};
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    gap: 200px;
    justify-content: center;
    align-items: center;
    margin: 80px auto;
    padding: 60px;
    border: 4px solid ${({ theme }) => theme.COLORS.ORANGE_100};
    border-radius: 20px;

    .arrow {
        a{
            display: flex;
            flex-direction: column;      
        }
    }

   .perfil {
    text-align: center;

    h1 {
        font-size: 30px;
        font-weight: 400;
        padding: 12px;
        margin: 16px;
        border: 1px dashed ${({ theme }) => theme.COLORS.ORANGE_100};
        box-shadow: 9px 16px 80px -12px rgba(0,0,0,0.1);
        border-radius: 8px;
    }

    > img {
        background: transparent;
        border-radius: 50%;
        height: 250px;
        width: 250px;
    }
    
   }

   .main {
        h2 {
            text-align: center;
            padding-bottom: 16px;
            color: ${({ theme }) => theme.COLORS.ORANGE_100};
        }

        background-color: ${({ theme }) => theme.COLORS.YELLOW_100} ;
        padding: 80px 20px;
        border: 1px dashed ${({ theme }) => theme.COLORS.ORANGE_100};
        border-radius: 10px;
        box-shadow: 9px 16px 80px -12px rgba(0,0,0,0.1);

   }

   @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        gap: 20px;
        padding: 20px 0;

        a {
            display: flex;
            width: 200px;
            flex-direction: column;

            svg {
                display: flex;
                margin-inline: -100px;
            }
        }

        .perfil{
            > img {
                height: 200px;
                width: 200px;
            }

            h1 {
                font-size: 26px;
                font-weight: 300;
                padding: 4px;
                margin: 16px;
            }
        }

        .main {
            padding: 20px 10px;

            h2 {
                font-size: 20px;
            }
        }
    }
`;