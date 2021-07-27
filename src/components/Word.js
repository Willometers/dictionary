import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'



const Word = (props) => {

    return(

<Row xs={2} md={4} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (

    <Col>
        <Card style={{width: '18rem'}}>

        <Card.Title>{props.word.meta.id}</Card.Title>

        <ul>
            {props.word.shortdef.map(def => 
                <Card.Body>
                    <li>{def}</li>
                </Card.Body>)}
        </ul>

        <Card.Body>{props.word.date}</Card.Body>

        <Button>Save</Button>

        </Card>
    </Col>
    ))}
  </Row>
    )
};

export default Word