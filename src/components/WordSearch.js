import React from "react";
import Word from "./Word";

const WordSearch = (props) => {

console.log('WoSear', props)

        return(

            <div>

            <h2>Search Resutls:</h2>

            {props.allWords.map(word => {
                return (
                <div>
                < Word word={word} />
                </div>
                )})
            }
                
            </div>
        )
    }    

export default WordSearch