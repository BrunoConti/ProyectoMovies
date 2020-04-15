import React, { Component } from 'react'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handlerChange = (e) => {
        this.setState({inputMovie: e.target.value})
    } 

    _handlerSubmit = (e) => {
        e.preventDefault()
        alert(this.state.inputMovie)
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