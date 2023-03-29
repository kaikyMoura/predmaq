import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css';
import { useState, useEffect } from 'react';

function Header(props) {

   const [dataHora, setDataHora] = useState(new Date());

   useEffect(() => {
      const intervalId = setInterval(() => {
         setDataHora(new Date());
      }, 1000);

      return () => clearInterval(intervalId);
   }, []);

   return (
      <Container className='header'>
         <Row>
            <Col md={6} className='usuario'>
               Bem-vindo Usuário(a)!
            </Col>
            <Col md={6} className='horadata'>
               {dataHora.toLocaleTimeString()} | {dataHora.toLocaleDateString()}
            </Col>
         </Row>
      </Container>
   );
}

export default Header;