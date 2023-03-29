import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header-predicao.css';

function Header(props) {
    return(
       <Container className='header'>
            <Row>
                 <Col md={6} className='usuario'>
                    Tabela de Manutenção
                 </Col>
                 <Col md={6} className='horadata'>
                    Exportar Editar Recarregar
                 </Col>
            </Row>
       </Container>
    );
}

export default Header;