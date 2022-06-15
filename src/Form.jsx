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
                        placeholder='title'
                        value={props.formData.title}
                        onChange={event => props.titleChangeHandler(event)}
                    />
                </div>
                {props.formData.ingredients.map((element, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='name'
                                placeholder='new ingredient'
                                value={element.name}
                                onChange={event => props.ingredientChangeHandler(index, event)}
                            />
                        </div>
                    )
                })}
            </form>
        </div>
    )
}

export default Form;