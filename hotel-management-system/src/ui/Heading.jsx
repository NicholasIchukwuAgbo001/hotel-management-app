import styled from "styled-components";

const fontSizes = {
  h1: "4rem",
  h2: "3rem",
  h3: "2.2rem",
};

const fontWeights = {
  h1: 600,
  h2: 500,
  h3: 400,
};

const Heading = styled.h1`
  font-size: ${(props) => fontSizes[props.type] || "2rem"};
  font-weight: ${(props) => fontWeights[props.type] || 400};
`;

export default Heading;
