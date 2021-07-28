import React from 'react'
import { Card } from 'react-bootstrap'

const Word = (props) => {

    return (

        <Card 
        onClick={() => props.callBack(props.word)}
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
        </Card>
    )
}

export default Word