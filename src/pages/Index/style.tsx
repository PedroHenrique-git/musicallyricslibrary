import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const BackgroundContainer = styled.div`
    background: rgba(28, 32, 44, 0.952);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
`;

export const SearchContainer = styled.section`
    max-width: 600px;
    margin: 100px auto;
    padding: 0 25px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 1;

    @media (max-width: 640px) {
        margin: 15px auto;
    }

    h1 {
        color: ${colors.cinza};
        font-weight: 100;
        font-size: 28px;
        margin-bottom: 30px;

        @media (max-width: 640px) {
            text-align: center;
        }
    }

    form {
        border-bottom: 2.5px solid ${colors.cinza};
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        input {
            border: none;
            background: transparent;
            color: ${colors.cinza};
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

    .recently_searched {
        margin: 30px 0;

        @media (max-width: 640px) {
            margin: 0;
            margin-top: 15px;
        }

        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
    }

    .recently_searched {
        display: flex;
        flex-direction: column;
        width: 100%;

        .title {
            h2 {
                color: ${colors.cinza};
                font-weight: 100;
                font-size: 28px;
                margin-bottom: 15px;
            }
        }
        .recently_searched-cards {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;

            @media (max-width: 640px) {
                display: grid;
                gap: 5px;
                grid-template-rows: auto auto;
                grid-template-columns: auto auto;
            }

            .card {
                margin-right: 10px;

                img {
                    height: 140px;
                    width: 140px;

                    @media (max-width: 640px) {
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }
`;
