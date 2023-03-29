import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './logo.css';

function Logo() {
  return (
    <Card className='logoCard' style={{border: '0px'}}>
      <Card.Img variant="top" src="logo-PI-2023-simbolo-02.png" />
    </Card>
  );
}

export default Logo;