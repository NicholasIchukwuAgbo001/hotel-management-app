import styled from 'styled-components';
import Button from './ui/Button';
import GlobalStyles from './styles/GlobalStyles'; 
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StyleApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />

      <StyleApp>
        <H1>Hello World</H1>
        <Button>Click me</Button>
        <Input type="text" placeholder="Enter your name" />
        <Input type="text" placeholder="Enter your name" />
      </StyleApp>
    </>
  );
};

export default App;
