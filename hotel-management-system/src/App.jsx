import styled from 'styled-components';
import Button from './ui/Button';
import GlobalStyles from './styles/GlobalStyles'; 
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyleApp = styled.main`
  padding: 20px;
  `;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
      <Row type="vertical">
        <Row type="horizontal">
          <Heading type='h1'>The Wild Oasis</Heading>
          
          <div>
            <Heading type='h2'>Check in and out</Heading>
            <Button variation="primary" size="medium">Check in</Button>
            <Button variation="secondary" size="small">Check out</Button>
          </div>
        </Row>

       <Row type="vertical">
        <Heading type='h3'>Form</Heading>
        <form>
          <Input type="number" placeholder="phone number" />
          <Input type="text" placeholder="Enter your name" />
        </form>
       </Row>
      </Row>
      </StyleApp>
    </>
  );
};

export default App;
