import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${props => 
    props.type === 'horizontal' && css`
    justify-content: space-between;
    align-items: center;
  `}

  ${props => 
    props.type === 'vertical' && css`
    flex-direction: column;
    align-items: center;
  `}
`;

export default Row;
