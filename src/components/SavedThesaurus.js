import React from "react";
import ThesaurusWord from "./ThesaurusWord";

const SavedThesaurus = (props) => {

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
                < ThesaurusWord
                    word={word}
                    callBack={props.callBack} />
                </div>
                )})
            }

            </div>
        )
    }

export default SavedThesaurus