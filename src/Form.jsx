import './Form.css';
import React, { useState } from 'react';

const Form = (props) => {

    const onSubmit = e => {
        e.preventDefault();
        // todo - Send data to backend
    };

    return (
        <div className='Form'>
            <form>
                <div>
                    <input
                        className='title'
                        type='text'
                        placeholder='title'
                        value={props.formData.title}
                        onChange={event => props.inputChangeHandler(null, event)}
                    />
                    <input
                        type='button'
                        value='+'
                        onClick={event => props.addIngredientHandler(props.formData.ingredients.length, event)}
                    />
                </div>
                {props.formData.ingredients.map((element, index) => {
                    return (
                        <div className='wrapper' key={index}>
                            <input
                                className='ingredient'
                                name='name'
                                type='text'
                                placeholder='ingredient'
                                value={element.name}
                                onChange={event => props.inputChangeHandler(index, event)}
                                onKeyDown={event => props.keyDownHandler(index, event)}
                            />
                            <input
                                className='ingredientRemove'
                                type='button'
                                value='X'
                                onClick={event => props.removeIngredientHandler(index, event)}
                            />
                        </div>
                    )
                })}
            </form>
        </div>
    )
}

export default Form;