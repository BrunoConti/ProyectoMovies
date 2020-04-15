import React, { Component } from 'react'

const API_KEY = 'e697495e'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handlerChange = (e) => {
        this.setState({inputMovie: e.target.value})
    } 

    _handlerSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search, totalResults } = results
                console.log({ Search, totalResults })
                this.props.onResults(Search)
            })
    }       

    render(){
        return (
            <form onSubmit={this._handlerSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                        className="input" 
                        type="text" 
                        placeholder="Movie to search..."
                        onChange={this._handlerChange}
                        ></input>
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}