import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css';

function Header(props) {
    return(
       <Container className='header'>
            <Row>
                 <Col md={6} className='usuario'>
                    Bem-vindo Usuário(a)!
                 </Col>
                 <Col md={6} className='horadata'>
                    09:00  02/02/2022
                 </Col>
            </Row>
       </Container>
    );
}

export default Header;