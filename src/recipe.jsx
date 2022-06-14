import React from 'react';
import './recipe.css'

class Ingredient extends React.Component{
    render() {
        return (
            <div>
                <input>
                </input>
                <select>
                    <option value='liters'>L</option>
                    <option value='grams'>g</option>
                </select>
            </div>
        )
    }
}


class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.defaultTitle = 'My Recipe'
        this.state = {
            numIngredients: 0,
            recipeTitle: this.defaultTitle,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.titleInput.focus();
    }
    handleChange = (e) => {
        var s = e.target.value;
        if (s == '') {
            s = this.defaultTitle
        }
        this.setState({recipeTitle: s})
    }
    handleClick() {
        const i = this.state.numIngredients + 1;
        this.setState({numIngredients: i})
    }
    render() {
        return (
            <div>
                <h1 className='title-display'
                    style={{
                        color: this.state.recipeTitle == this.defaultTitle ? 'grey' : 'black'
                    }}>
                    {this.state.recipeTitle}</h1>
                <input 
                    ref={titleInput => (this.titleInput = titleInput)}
                    type='text'
                    onChange={this.handleChange}
                />
                <button
                    onClick = {this.handleClick}
                >
                    {this.state.numIngredients}
                </button>
                <hr />
                {
                    Array.from({length: this.state.numIngredients}, (v, i) => <Ingredient key={i}/>)
                }
            </div>
        );
    }
}

export default Recipe