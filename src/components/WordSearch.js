import React from "react";
import Word from "./Word";

const WordSearch = (props) => {

    // console.log('WoSear', props)

        return(

            <div>

            <h3>Search Results:</h3>

            {props.allWords.map(word => {
                return (
                <div>
                < Word 
                    word={word}
                    callBack={props.callBack} />
                </div>
                )})
            }
                
            </div>
        )
    }    

export default WordSearch