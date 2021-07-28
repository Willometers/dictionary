import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Word = (props) => {
    return(
        <Card 
        style={{width: '18rem'}}
        primary='blue'
        >
        <Card.Title>{props.word.meta.id}</Card.Title>
        <Card.Body>
            {props.word.shortdef.map(def => 
                <ul>
                    <li>{def}</li>
                </ul>)}    
        </Card.Body>
        <Card.Body>{props.word.date}</Card.Body>
        <Button onClick={() => props.handleSave(word)}>Save</Button>
        </Card>
    )
})


export default Word