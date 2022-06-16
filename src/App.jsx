import React, { useState } from 'react'
import './App.css';
import Form from './Form.jsx'

function App() {

  const [formData, setFormData] = useState(
    { title: '', ingredients: [{name: ''}, {name: 'barry bonds'}] }
  )

  // Handle change in input value according to event.target.className
  const handleInputChange = (index, event) => {
    let data = {...formData}
    let cName = event.target.className;
    switch(cName) {
      case 'title':
        data.title = event.target.value;
        break;
      case 'ingredient':
        data.ingredients[index][event.target.name] = event.target.value;
        break;
    }
    setFormData(data)
  }

  // Add ingredient *after* the specified index
  const handleAddIngredient = (index, event) => {
    let data = {...formData}
    data.ingredients.splice(index+1, 0, {name: ''})
    setFormData(data)
  }

  // Remove ingredient at the specified index
  const handleRemoveIngredient = (index, event) => {
    let data = {...formData}
    data.ingredients.splice(index, 1)
    setFormData(data)
  }

  // Handle key down event according to event.key
  const handleKeyDown = (index, event) => {
    let key = event.key;
    switch(key) {
      case 'Enter':
        handleAddIngredient(index, event)
        break;
      case 'z':
        console.log('press z')
        break;
    }
  }

  return (
    <Form
      formData={formData}
      titleChangeHandler={handleTitleChange}
      ingredientChangeHandler={handleIngredientChange}
      addIngredientHandler={handleAddIngredient}
      removeIngredientHandler={handleRemoveIngredient}
      keyDownHandler={handleKeyDown}
      inputChangeHandler={handleInputChange}
    />
  );
}

export default App;