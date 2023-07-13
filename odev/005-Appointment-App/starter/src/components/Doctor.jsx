import { doctorData } from "../helpers/data";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import AddModel from "./AddModal";

const Doctor = () => {

  const [show, setShow] = useState(false);
  const handleShow = (e) =>{
    console.log(e.target.getAttribute("id"));
    setShow(true)} ;

    return (
      <Container>
        <AddModel show = {show} setShow = {setShow} />   {/* props olarak gonderdik*/ }

        <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center g-3">
          {doctorData.map(({ id, name, dep, img }) => (
            <Card key={id} style={{ width: "18rem" }}>
              <Card.Img id={id} variant="top" src={img} onClick={handleShow} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{dep}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    );
};
export default Doctor;