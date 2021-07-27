import { Component } from "react";
// import WordContainer from "../containers/WordContainer";
import { Form } from 'react-bootstrap'
import Word from '../components/Word'

const URL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/'
const key = '?key=99b4ce5d-7ca7-4258-90a4-39b4171e5d4a'

class WordSearch extends Component {

    state = {
        allWords: [],
        input: '',
        savedWords: [],
      }
    
      fetchWords = () => {

        if (this.state.allWords !== undefined) {
        let input = this.state.input
        fetch(URL+`${input}`+key)
        .then(res => res.json())
        .then(words => this.setState({allWords: words}))
        }

        else {
        fetch(URL+`undefined`+key)
        .then(res => res.json())
        .then(words => this.setState({allWords: words}))
        }
    }

    render() {
        console.log("woSe", this.state)
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
                        this.fetchWords()}}
                    >
                    <Form.Control 
                    size='lg' 
                    placeholder="Search" 
                    type="text"
                    />
                </Form>
                
                <div className="word-collection">
                    {this.state.allWords.map(word => {
                        return(
                        < Word word={word} />
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default WordSearch