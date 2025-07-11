import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  `;

  const Button = styled.button`
  font-size: 1.5rem;
  padding: 1.4rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: #9c0795;
  color: #fff;
  `;

const App = () => {
  return (
    <div>
     <H1> Hello World </H1>
     <Button> Click me </Button>
    </div>
  )
}

export default App
