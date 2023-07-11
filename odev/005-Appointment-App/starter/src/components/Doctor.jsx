import {doctorData} from '../helpers/data';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";


const Doctor = () => {
  return (
    <Container>
        <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center g-3"> 
        {doctorData.map(({id,name,dep,img})=> 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {dep}
          </Card.Text>
         
        </Card.Body>
      </Card>
        )}
        </Row>
    </Container>
  )
}

export default Doctor