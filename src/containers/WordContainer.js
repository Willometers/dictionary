import { Component } from "react";
import WordSearch from "../components/WordSearch";
import SavedWords from "../components/SavedWords";

const URL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/'
const key = '?key=99b4ce5d-7ca7-4258-90a4-39b4171e5d4a'

class WordContainer extends Component {

  state = {
    allWords: [],
    input: '',
    savedWords: [],
}

fetchWords = () => {
        let input = this.state.input
        fetch(URL+`${input}`+key)
        .then(res => res.json())
        .then(words => this.setState({allWords: words}))
}

handleSave = (word) => {
    this.setState({
        savedWords: [...this.state.savedWords, word]
    })
}

handleDelete = () => {
  console.log('deleted')
}

render() {
    // console.log('saved words', this.state.savedWords)
    return(

        <div>
            <h2>Word Search:</h2>
            <Form onChange={(e) => {
                e.preventDefault()
                this.setState({
                    input: e.target.value
                    })
                }}
                onSubmit={(e) => {
                    e.preventDefault()
                    e.target.reset()
                    this.fetchWords()}}
                >
                <Form.Control 
                size='lg' 
                placeholder="Search" 
                type="text"
                />
            </Form>

             
            <div className="row">

            <div className="col-8">
              <WordSearch
                words={this.state.allWords} 
                handleSave={this.handleSave}
              />
            </div>

            <div className="col-4">
              <SavedWords 
                savedWords={this.state.savedWords} 
                handleDelete={this.handleDelete}
              />
            </div>

          </div>
              

        </div>
        
      )
    }
}

export default WordContainer