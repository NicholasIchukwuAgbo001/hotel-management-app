import styled from 'styled-components';
import Button from './ui/Button';
import GlobalStyles from './styles/GlobalStyles'; 
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyleApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <Row />
        <Heading type='h1'>Hello World</Heading>

        <Heading type='h2'>Hello World</Heading>

        <Button>Click me</Button>
        <Input type="text" placeholder="Enter your name" />

        <Heading type='h3'>Hello World</Heading>
        
        <Input type="number" placeholder="phone number" />
      </StyleApp>
    </>
  );
};

export default App;
