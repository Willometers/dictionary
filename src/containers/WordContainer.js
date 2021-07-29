import { Component } from "react";
import WordSearch from "../components/WordSearch";
import SavedWords from "../components/SavedWords";
import { Form } from "react-bootstrap"

const URL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/'
const key = '?key=99b4ce5d-7ca7-4258-90a4-39b4171e5d4a'
const postUrl = 'http://localhost:3000/posts'

class WordContainer extends Component {

  state = {
    allWords: [],
    input: '',
    savedWords: [],
}

getWords = () => {
        let input = this.state.input
        fetch(URL+`${input}`+key)
        .then(res => res.json())
        .then(words => this.setState({allWords: words}))
}

postWords = () => {
  console.log('posted')
}

handleSave = (newWord) => {
  // console.log(this.state.savedWords)
  if (!this.state.savedWords.find(word => word === newWord))
      this.setState({
        savedWords: [...this.state.savedWords, newWord] })
        this.postWords(newWord)
        let head = {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Accept:"application/json;charset=utf-8"
          },
          body: JSON.stringify(newWord)
        }
        fetch(postUrl, head)
        .then(res => res.json())

}

handleDelete = (newWord) => {
  this.setState({
    savedWords: this.state.savedWords.filter(word => word !== newWord)
  })
}

render() {
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
                    // console.log('submitted')
                    this.getWords()}}>
                <Form.Control 
                size='lg' 
                placeholder="Search" 
                type="text"
                />
            </Form>
            <div className="row">
            <div className="col-8">
              <WordSearch
                allWords={this.state.allWords} 
                callBack={this.handleSave}
              />
            </div>
            <div className="col-4">
              <SavedWords 
                savedWords={this.state.savedWords} 
                callBack={this.handleDelete}
              />
            </div>
          </div>
        </div>
      )
    }
}

export default WordContainer