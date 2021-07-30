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

    handleDelete = (e) => {
        console.log(e.meta.sort)
    }

    render() {
        // console.log(this.state.previousSaves)
        return(
            <div>
            {this.state.previousSaves.map(word => {
                console.log(word)
                return (
                    <div
                        className="word-card"
                        key={word.meta.sort}
                    >
                        <br></br>
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
