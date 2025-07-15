import styled from "styled-components"

const StyleHeader = styled.header`
    background-color: orangered;
    padding: 1.2rem 4.8rem;
    border-radius: 1px solid var(--color-grey-100);
`;

const Header = () => {
  return (
    <StyleHeader>
      HEADER
    </StyleHeader>
  )
}

export default Header
