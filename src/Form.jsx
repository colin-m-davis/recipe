import './Form.css';
import React from 'react';
import fields from './fields.js'

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
                        onChange={event => props.inputChangeHandler(event, {area: 'title'})}
                    />
                </div>
                {props.ingredients.map((ingredient, index) => {
                    const area = 'ingredient'
                    return (
                        <div key={index}>
                        {fields[area].map((field) => {
                            const {fieldName, fieldType} = field
                            let payload = {area: area, index: index, name: fieldName}
                            let placeholder;
                            switch(fieldName) {
                                case ('amount'):
                                    placeholder = '#'
                                    break;
                                case ('name'):
                                    placeholder = 'ingredient'
                                    break;
                            }
                            return (
                                <input
                                    key={`${index}_${fieldName}`}
                                    className={`${area}_${fieldName}`}
                                    type={fieldType}
                                    name={fieldName}
                                    value={ingredient[fieldName]}
                                    placeholder={placeholder}
                                    onChange={event => props.inputChangeHandler(event, payload)}
                                    onKeyDown={event => props.keyDownHandler(event, payload)}
                                    ref={element => props.addRefHandler(element, payload)}
                                />
                            )
                        })}
                        </div>
                    )
                })}
                <p>FUCK YEA</p>
                {props.formData.step.map((element, index) => {
                    return (
                        <div className='wrapper' key={'step' + index.toString()}>
                            <input
                                type='text'
                                placeholder={'step' + index.toString()}
                            />
                        </div>
                    )
                })}
            </form>
        </div>
    )
}

export default Form;