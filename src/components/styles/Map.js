import styled from "styled-components";

export default styled.div`
    width: 100%;
    height: 400px;

    @media only screen and (min-width: 740px) {
        width: calc(100% - 350px);
        height: 800px;
    }
`;
