import { Component } from "react";
import Word from '../components/Word'

const URL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/'
const key = '?key=99b4ce5d-7ca7-4258-90a4-39b4171e5d4a'

class WordContainer extends Component {

    state = {
        allWords: [],
        input: "banana",
        savedWords: [],
      }
    
      componentDidMount() {
        
        let searchWord = this.state.input
        console.log('SW', searchWord)
        fetch(URL+`${searchWord}`+key)
        .then(res => res.json())
        .then(words => this.setState({allWords: words}))
      }
    

    render() {
        console.log(this.state.allWords)
        return(
            <div>

             <Word />
            
            </div>
        )
    }

}

export default WordContainer