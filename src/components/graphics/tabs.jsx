import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import './graphics.css';
//import GraficoA from './graphics';

function AbasPlotagem() {
  return (
    <Container className='abas'>
        <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
        <Tab eventKey="home" title="Plotagem">
            Plotagem
        </Tab>
        <Tab eventKey="profile" title="Dataframe">
            Dataframe
        </Tab>
        </Tabs>
    </Container>
  );
}

export default AbasPlotagem;