import { Component } from "react";
import WordContainer from "../containers/WordContainer";

class SavedWords extends Component {

    render() {
        return(
            <div>
                <h1>Saved Words</h1>

                <WordContainer />
                

            </div>
        )
    }


}

export default SavedWords