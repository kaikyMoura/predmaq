import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import CampoBusca from '../../components/busca/busca';
import AbasPlotagem from '../../components/graphics/tabs';
import HeaderTabela from '../../components/header-predicao/header-predicao';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import TabelaPredicao from '../../components/tabela de predicao/tabela_predicao';
import './grade.css';

function GradeApp() {

    const [maquinas, setMaquinas] = useState([]);

    const adicionarMaquina = () => {
        const novaMaquina = {
            id: maquinas.length + 1,
            nome: `Máquina ${maquinas.length + 1}`,
            eventKey: `maquina${maquinas.length + 1}`
        };
        setMaquinas([...maquinas, novaMaquina]);
    };

    function removerMaquina(id) {
        const novaLista = maquinas.filter(maquina => maquina.id !== id);
        setMaquinas(novaLista);
    }

    return (
        <Container>
            <Tab.Container id="tabs-maquinas" defaultActiveKey="primeiro">
                <Row>
                    <Col className='colunas_headers'><Header /></Col>
                </Row>
                <Row>
                    <Col className='colunas' xs={4}>
                        <Row className='logo'><Logo /></Row>
                        <Row className='busca'><CampoBusca /></Row>
                        <Row className='sel-maquinas'>
                            <Nav variant="pills" className="flex-column">
                                {maquinas.map(maquina => (
                                    <Nav.Item key={maquina.id} className='botaoMaq'>
                                        <Nav.Link eventKey={maquina.eventKey}>{maquina.nome}
                                            <Button onClick={() => removerMaquina(maquina.id)}>X</Button>
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Row>
                        <Row className='justify-content-md-center'>
                            <Button onClick={adicionarMaquina} id='adicionar' type='submit'
                                variant='outline-primary' size='lg'>+</Button>
                        </Row>
                    </Col>
                    <Col className='colunas_plotagem' xs={8}>
                        <Tab.Content>
                            {maquinas.map(maquina => (
                                <Tab.Pane key={maquina.id} eventKey={maquina.eventKey} className='maqpanes'>
                                    <Row><AbasPlotagem /></Row>
                                    <Row className='header-tabela'><HeaderTabela /></Row>
                                    <Row><TabelaPredicao /></Row>
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default GradeApp;