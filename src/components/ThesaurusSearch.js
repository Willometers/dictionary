import React from "react";
import ThesaurusWord from "./ThesaurusWord";

const ThesaurusSearch = (props) => {

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
                < ThesaurusWord 
                    word={word}
                    callBack={props.callBack} />
                </div>
                )})
            }
                
            </div>
        )
    }    

export default ThesaurusSearch