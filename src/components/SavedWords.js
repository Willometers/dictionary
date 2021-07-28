import React from "react";
import Word from "./Word";

const SavedWords = (props) => {

    // console.log('SavWor', props.savedWords)
    
        return(
    
            <div>
    
            <h2>Saved Words:</h2>

            {props.savedWords.map(word => {
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

export default SavedWords
