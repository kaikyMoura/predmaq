import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import GraficoA from '../../components/graphics/graphics';
import AbasPlotagem from '../../components/graphics/tabs';
import Header from '../../components/header/header';
import HeaderTabela from '../../components/header-predicao/header-predicao';
import CampoBusca from '../../components/busca/busca';
import TabelaPredicao from '../../components/tabela de predicao/tabela_predicao';
import Adicionar from '../../components/adicionar/adicionar'
import './grade.css';
import Logo from '../../components/logo/logo';

function GradeApp() {
    return (
    <Container>
        <Tab.Container id="tabs-maquinas" defaultActiveKey="primeiro">
            <Row>
            <Col className='colunas_headers'><Header/></Col>
            </Row>
            <Row>
            <Col className='colunas' xs={4}>
                    <Row className='logo'><Logo/></Row>
                    <Row className='busca'><CampoBusca/></Row>
                    <Row className='sel-maquinas'>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className='botaoMaq'>
                                <Nav.Link eventKey="primeiro">Maquina 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='botaoMaq'>
                                <Nav.Link eventKey="segundo">Maquina 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                    <Row className='justify-content-md-center'>
                            <Adicionar/>
                    </Row>
            </Col>
            <Col className='colunas_plotagem' xs={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="primeiro" className='maqpanes'>
                            <Row><AbasPlotagem/></Row>
                            <Row className='header-tabela'><HeaderTabela/></Row>
                            <Row><TabelaPredicao/></Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="segundo" className='maqpanes'>
                            <Row><AbasPlotagem/></Row>
                            <Row className='header-tabela'><HeaderTabela/></Row>
                            <Row><TabelaPredicao/></Row>
                        </Tab.Pane>
                    </Tab.Content>  
            </Col>
            </Row>
        </Tab.Container>
    </Container>
    );
  }
  
  export default GradeApp;