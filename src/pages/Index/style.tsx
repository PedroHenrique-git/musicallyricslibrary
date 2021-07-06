import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const SearchContainer = styled.section`
    max-width: 600px;
    margin: 100px auto;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 1;

    h1 {
        color: ${colors.white};
        font-weight: 100;
        font-size: 28px;
        margin-bottom: 30px;
    }

    form {
        border-bottom: 2.5px solid ${colors.white};
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        input {
            border: none;
            background: transparent;
            color: ${colors.white};
            outline: none;
            height: 45px;
            font-size: 18px;
            padding: 10px;
            border-radius: 20px;
            width: 100%;

            &::placeholder {
                color: ${colors.white};
            }
        }

        button {
            border: none;
            background: transparent;
            cursor: pointer;
            height: 45px;
        }
    }
`;