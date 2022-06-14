import React from 'react';
import './recipe.css'

class Ingredient extends React.Component{
    render() {
        return (
            <div>
                <p>I am an ingredient!!!</p>
            </div>
        )
    }
}


class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numIngredients: 0,
        };
        this.handleClick = this.handleClick.bind(this); //WTF
    }
    componentDidMount() {
        this.title.focus();
    }
    handleClick() {
        const i = this.state.numIngredients + 1;
        this.setState({numIngredients: i})
    }
    render() {
        return (
            <div>
                <h1>New Recipe</h1>
                <input 
                    className = 'recipe-titleInput'
                    ref={title => (this.title = title)}
                />
                <button
                    onClick = {this.handleClick}
                >
                    {this.state.numIngredients}
                </button>
            </div>
        );
    }
}

export default Recipe