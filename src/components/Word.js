import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'

const Word = (props) => {

return(

props.words.map(word => {

    return(

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
    )
})
)}

export default Word