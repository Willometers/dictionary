import React, { Component } from 'react'
import Word from './Word'

const postUrl = 'http://localhost:3000/posts'

class PreviousSavesContainer extends Component {

    state = {
        previousSaves: []
    }

    componentDidMount() {
        fetch(postUrl)
        .then(res => res.json())
        .then(words => this.setState({previousSaves: words}))
    }

    handleDelete = (word) => {
        console.log(word)
    }

    render() {
        // console.log(this.state.previousSaves)
        return(
            <div>
            {this.state.previousSaves.map(word => {
                console.log(word)
                return (
                    <div>
                        < Word 
                            word={word}
                            callBack={this.handleDelete} 
                        />
                    </div>
                )})
            }
            </div>
        )
    }

}

export default PreviousSavesContainer