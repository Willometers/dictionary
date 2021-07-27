import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const Word = (props) => {

return(

props.words.map(word => {

    return(

    <Row xs={2} md={1} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (

    <Col>
        <Card 
        style={{width: '18rem'}}
        primary='blue'
        >
        <Card.Title>{word.meta.id}</Card.Title>
        <Card.Body>
            {word.shortdef.map(def => 
                <ul>
                    <li>{def}</li>
                </ul>)}    
        </Card.Body>
        <Card.Body>{word.date}</Card.Body>
        <Button onClick={() => props.handleSave(word)}>Save</Button>
        </Card>
    </Col>
    ))}
    </Row>
    )
})
)}

export default Word