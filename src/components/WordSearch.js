import { Component } from "react";
import WordContainer from "../containers/WordContainer";

const URL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/'
const key = '?key=99b4ce5d-7ca7-4258-90a4-39b4171e5d4a'

class WordSearch extends Component {

    render() {
        return(
            <div>
                <h1>Word Search</h1>
                
                <form>

                </form>
                
                <WordContainer />

            </div>
        )
    }

}

export default WordSearch