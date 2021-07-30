import React from "react";
import Word from "./Word";

const SavedWords = (props) => {

    // console.log('SavWor', props.savedWords)
    
        return(
    
            <div>
            <br></br>
            <h3>Saved Words:</h3>

            {props.savedWords.map(word => {
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

export default SavedWords
