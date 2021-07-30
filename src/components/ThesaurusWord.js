import React from 'react'
import { Card } from 'react-bootstrap'

const ThesaurusWord = (props) => {

    return (

        <Card 
            onClick={() => props.callBack(props.word)}
            style={{width: '18rem'}}
            primary='blue'
            className="word-card"
            key={props.word.meta.sort}
        >
        <Card.Title>{props.word.meta.id}</Card.Title>
        <Card.Body>
            {props.word.syns.map(def => 
                <ul>
                    <li>{def}</li>
                </ul>)}    
        </Card.Body>
        <Card.Body>{props.word.date}</Card.Body>
        </Card>
    )
}

export default ThesaurusWord