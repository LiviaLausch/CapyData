import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
   button {
    background-color: ${({ theme }) => theme.COLORS.YELLOW_100};
    color: ${({ theme }) => theme.COLORS.GREEN};
    border: none;
    border-radius: 10px;
    box-shadow: 9px 16px 80px -12px rgba(0,0,0,0.1);
    padding: 16px;
    margin: 16px;

    > div {
        min-width: 180px;

        > h2 {
            display: flex;
            justify-content: end;
            padding-right: 20px;
            font-size: 28px;
        }
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        p {
            font-size: 16px;
            font-weight: 500;
            margin: 12px 0 6px;
        }

        span {
            font-size: 14px;
            font-weight: 300;
            padding-bottom: 12px;
        }
    }
   }
`;
