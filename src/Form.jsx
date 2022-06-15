import React from 'react';


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            ingredients: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createIngredientList() {
        return this.state.ingredients.map((ele, i) =>
            <div key={i}>
                <input type='text' placeholder='new ingredient' value={ele||''} onChange={this.handleIngredientChange.bind(this, i)}/>
                <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
            </div>
        )
    }

    handleTitleChange(e) {
        let title = this.state.title;
        title = e.target.value;
        this.setState({title: title});
    }

    handleIngredientChange(e, i) {
        let ingredients = [...this.state.ingredients];
        ingredients[i] = e.target.value;
        this.setState({ingredients: ingredients});
    }

    addClick() {
        let ingredients = [...this.state.ingredients];
        ingredients.push('');
        this.setState({ingredients: ingredients});
    }

    removeClick(i) {
        let ingredients = [...this.state.ingredients];
        ingredients.splice(i, 1);
        this.setState({ingredients: ingredients});
    }

    handleSubmit(e) {
        console.log('submit request logged')
        {/*SEND THINGS TO BACKEND IN A NICE LITTLE PACKAGE*/}
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='recipe title' onChange={this.handleTitleChange.bind(this)}/>
                {this.createIngredientList}
                <input type='button' value='add' onClick={this.addClick.bind(this)}/>
                <input type='Submit' value='save' onClick={this.handleSubmit.bind(this)}/>
            </form>
        )
    }
}
