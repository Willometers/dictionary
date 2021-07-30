import React from "react";
import Word from "./Word";

const WordSearch = (props) => {

    // console.log('WoSear', props)

        return(

            <div>
            <br></br>
            <h3>Search Results:</h3>

            {props.allWords.map(word => {
                return (
                <div
                    className="word-card"
                    key={word.meta.sort}
                >
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