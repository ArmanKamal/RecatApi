import React from 'react'

class SearchBar extends React.Component{

    state = {searchTerm: ''}

    onInputChange = (event) =>{
        this.setState({
            searchTerm: event.target.value
        })
    }

    onFormSubmit = event =>{
            event.preventDefault()
            console.log(this.state.searchTerm)
    }

    render(){
        return(
            <div className="searchbar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                    </div>
                   <input type="text" value={this.state.searchTerm} onChange={this.onInputChange} />
                </form>
                
            </div>
        )
    }
}

export default SearchBar