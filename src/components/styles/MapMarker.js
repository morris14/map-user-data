import styled from "styled-components";

export default styled.div`
    position: relative;
    width: 14px;
    height: 14px;
    cursor: pointer;

    .pin {
        width: 14px;
        height: 14px;
        border-radius: 10px;
        background-color: #fff;
        transition: transform 250ms ease-in-out;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4);
    }

    .details {
        position: absolute;
        top: 15px;
        left: 50%;
        text-align: center;
        transform: translate(-50%, 0);
        opacity: 0;
        visibility: hidden;
        background-color: #fff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4);
        border-radius: 2px;
        padding: 4px;
        white-space: nowrap;
        z-index: 1;
        transition: top 250ms ease-in-out, opacity 250ms ease-in-out, visibility 250ms ease-in-out;

        span {
            display: block;
        }
    }

    &:hover {
        .pin {
            transform: scale(1.5);
        }

        .details {
            opacity: 1;
            visibility: visible;
            top: 24px;
        }
    }
`;
